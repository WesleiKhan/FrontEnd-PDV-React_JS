import {useEffect, useState} from "react";
import {getCustomers} from "../../services/customer/CustomerService";

export function useGetCustomers() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCustomers()
        .then(res => setCustomers(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false));

    }, []);

    return {customers, loading, error};
}