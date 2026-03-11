import { api } from "../core/api";

export function registerCustomer(employeeData) {
    return api.post("/customer/create", employeeData);
}

export function getCustomers() {
    return api.get("/customer/customers");
}

export function updateCustomer(id, employeeData) {
    return api.put(`/customer/update/${id}`, employeeData);
}

export function deleteCustomer(id) {
    return api.delete(`/customer/delete/${id}`);
}