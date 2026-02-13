import {api} from "../core/api";

export function getProducts() {
    return api.get(`/product/products`);
}