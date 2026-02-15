import {useEffect, useState} from "react";
import {ReadInfosOfProductsSale} from "../../services/sale/SaleService";

export function useGetInfoProductsSale () {

    const [infoProductsOfSale, setProductsOfSale] = useState(null);

    useEffect(() => {
        ReadInfosOfProductsSale()
            .then(res => setProductsOfSale(res.data))
    }, [])

    return infoProductsOfSale;
}