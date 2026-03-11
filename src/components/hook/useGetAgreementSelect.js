import {useEffect, useState} from "react";
import {readAgreementOnRedis} from "../../services/agreement/AgreementService";

export function useGetAgreementSelect() {

    const [agreement, setAgreement] = useState();

    useEffect(() => {
        readAgreementOnRedis()
            .then(res => setAgreement(res.data));
    }, [])

    return {agreement};
}