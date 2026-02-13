import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080", // backend Spring
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");

    const publicRoutes = ["/user/login", "/user/refresh"]

    const isPublicRoute = publicRoutes.some(route =>
        config.url?.includes(route)
    );

    if (token && !isPublicRoute) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
    });


api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (
            error.response?.status === 403 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem("refresh_token");

                if (!refreshToken) throw new Error("Sem refresh token");

                const response = await api.post("/user/refresh", {
                    tokenRefresh: refreshToken
                });

                const { token, refresh_token } = response.data;

                localStorage.setItem("token", token);
                localStorage.setItem("refresh_token", refresh_token);

                originalRequest.headers.Authorization = `Bearer ${token}`;

                return api(originalRequest);

            } catch (err) {
                localStorage.clear();
                window.location.href = "/login";
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }

)