import {api} from "../core/api"

export function MakeSale (saleDate) {
    return api.post("/sale/make", saleDate)
}

export function ToWriteInfosOfProductsSale (infosProductsSale) {
    return api.post("/sale/info/products", infosProductsSale)
}

export function ReadInfosOfProductsSale () {
    return api.get("/sale/info/products")
}

export function DeleteInfosOfProductsSale () {
    return api.delete("/sale/info/products")
}