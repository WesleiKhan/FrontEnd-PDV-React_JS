import {useEffect, useState} from "react";
import {getAgreements} from "../../services/agreement/AgreementService";

export function useGetAgreement() {

    const [agreements, setAgreement] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAgreements()
        .then(res => setAgreement(res.data))
        .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return {agreements};
}