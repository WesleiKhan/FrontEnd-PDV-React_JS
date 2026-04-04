import FormCustomer from "../../components/customer/FormCustomer";
import {useGetCustomers} from "../../components/hook/useGetCustomers";
import SelectObjects from "../../components/Several/SelectObjects";
import {useState} from "react";

function UpdateCustomer() {

    const typeForm = "UPDATE";

    const {customers, loading, error} = useGetCustomers();
    const [idCustomerToSend, setIdCustomerToSend] = useState(null);

    return (
        <div>
            <SelectObjects
                objects={customers}
                value={idCustomerToSend}
                onChange={(e) => setIdCustomerToSend(e.target.value)}
            />
            <FormCustomer
                typeForm={typeForm}
                idCustomer={idCustomerToSend}
            />
        </div>
    )
}

export default UpdateCustomer