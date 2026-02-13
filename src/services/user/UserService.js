import { api } from "../core/api";

export function registerUser(userData) {
    return api.post("/user/create", userData);
}

export function updateUser(userData, id) {
    return api.put(`/user/update/${id}`, userData);
}

export function viewUsers() {
    return api.get(`/user/users`);
}

export function loginUser(userData) {
    return api.post("/user/login",userData);
}
