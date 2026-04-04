import { api } from "../core/api";

export function registerCustomer(customerData) {
    return api.post("/customer/create", customerData);
}

export function getCustomers() {
    return api.get("/customer/customers");
}

export function updateCustomer(id, customerData) {
    return api.put(`/customer/update/${id}`, customerData);
}

export function deleteCustomer(id) {
    return api.delete(`/customer/delete/${id}`);
}