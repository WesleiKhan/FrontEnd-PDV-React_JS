import {api} from "../core/api"

export function MakeSale (saleDate) {
    return api.post("/sale/make", saleDate)
}