import styles from "./FormCustomer.module.css"
import {useState} from "react";
import {
    registerCustomer,
    updateCustomer
} from "../../services/customer/CustomerService";
import {useNavigate} from "react-router-dom";


function FormCustomer({typeForm, idCustomer}) {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    async function customerEvent(e) {
        e.preventDefault();

        const customerData = {
            name: name,
            cpf: cpf,
            cnpj: cnpj,
            phoneNumber: phoneNumber,
        }

        if (typeForm === "REGISTER") {
            const response = await registerCustomer(customerData)

            console.log(response)
            navigate("/home")
        }else {
            const  response = await updateCustomer( idCustomer, customerData)

            console.log(response)
            navigate("/home")
        }

    }

    return (
        <div>
            <form onSubmit={customerEvent}>
                <input
                    type="text"
                    placeholder="Nome Do Cliente"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="CPF Cliente"
                    value={cpf}
                    onChange={e => setCPF(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="CNPJ Cliente"
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Numero De Telefone Do Cliente"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />

                <button type="submit">{typeForm}</button>
            </form>
        </div>
    )
}

export default FormCustomer;