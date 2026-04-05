import TableAgreements from "../../components/agreement/TableAgreements";
import FormAgreement from "../../components/agreement/FormAgreement";
import {useState} from "react";
import {useGetAgreement} from "../../components/hook/useGetAgreement";

function UpdateAgreement()  {

    const typeForm = "UPDATE";
    const {agreements} = useGetAgreement()
    const [idAgreement, setIdAgreement] = useState(null);

    return (
        <div>
            <TableAgreements
                agreements={agreements}
                onSelectAgreement={(agreement) => setIdAgreement(agreement)}
                typeAction={typeForm}
            />
            <FormAgreement
                typeForm={typeForm}
                id={idAgreement}
            />

        </div>
    )
}

export default UpdateAgreement;