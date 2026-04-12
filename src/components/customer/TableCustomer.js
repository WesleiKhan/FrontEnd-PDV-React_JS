import {useState} from "react";
import styles from "./TableCustomer.module.css"

function TableCustomer({customers, onSelectAgreement, typeAction}) {

    const [customerToSend, setCustomerToSend] = useState(null);

    function action(customer) {

        setCustomerToSend(customer.id);

        onSelectAgreement(customer.id);

        if (typeAction === "UPDATE") {

            onSelectAgreement(customer.id);
        }
    }

    if (!customers) return <p>Carregando2...</p>;

    return (
        <div className={styles.parent}>

            <h1>Clientes</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>CNPJ</th>
                    <th>CONTATO</th>

                </tr>
                </thead>
                <tbody>
                {customers.map((customer, index) => (
                    <tr key={index}
                        onClick={() => action(customer)}
                        className={customerToSend === customer.id ? styles.selected : ""}
                    >
                        <td>{customer.name}</td>
                        <td>{customer.cpf}</td>
                        <td>{customer.cnpj}</td>
                        <td>{customer.phoneNumber}</td>

                    </tr>
                ))}
                </tbody>
            </table>
            {(typeAction !== "UPDATE") && (
                <button
                    className={styles.button_add}
                    disabled={!customerToSend} // Desabilita se nada for selecionado
                    onClick={() => onSelectAgreement(customerToSend)}
                >
                    Selecionar
                </button>
            )}

        </div>
    )
}

export default TableCustomer;