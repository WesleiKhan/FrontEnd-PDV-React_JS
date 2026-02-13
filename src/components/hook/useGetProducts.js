import { useEffect, useState } from "react";
import {getProducts} from "../../services/product/ProductService"

export function useGetProducts() {
    const [productsGet, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
            .then(res => setProducts(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [])

    return { productsGet, loading, error };
}