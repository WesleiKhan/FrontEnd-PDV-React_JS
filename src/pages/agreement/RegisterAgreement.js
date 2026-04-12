import {useState} from "react";
import FormAgreement from "../../components/agreement/FormAgreement";
import {useGetCustomers} from "../../components/hook/useGetCustomers";
import TableCustomer from "../../components/customer/TableCustomer";

function RegisterAgreement() {

    const typeForm = "REGISTER";
    const {customers, loading, error} = useGetCustomers()
    const [idCustomer, setIdCustomer] = useState(null);


    return (
        <div>
            <TableCustomer
                customers={customers}
                onSelectAgreement={(customerId) => setIdCustomer(customerId)}
                typeAction={typeForm}
            />
            <FormAgreement
                typeForm={typeForm}
                id={idCustomer}
            />

        </div>
    )
}

export default RegisterAgreement;