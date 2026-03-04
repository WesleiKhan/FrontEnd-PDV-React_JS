import {api} from "../core/api";

export function createProduct(date) {
    return api.post("/product/create", date);
}

export function getProducts() {
    return api.get(`/product/products`);
}

export function updateProduct(id, date) {
    return api.put(`/product/update/${id}`, date);
}