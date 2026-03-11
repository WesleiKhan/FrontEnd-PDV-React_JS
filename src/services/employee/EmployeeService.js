import { api } from "../core/api";

export function registerEmployee(userData) {
    return api.post("/user/create", userData);
}

export function updateEmployee(userData, id) {
    return api.put(`/user/update/${id}`, userData);
}

export function viewEmployees() {
    return api.get(`/user/users`);
}

export function loginEmployee(userData) {
    return api.post("/user/login",userData);
}
