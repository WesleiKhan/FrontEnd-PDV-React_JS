
import styles from "./TableAgreements.module.css";
import {useState} from "react";

function TableAgreements({agreements, onSelectAgreement, typeAction}) {

    const [agreementToSend, setAgreementToSend] = useState(null);

    function action(agreement) {

        setAgreementToSend(agreement);

        if (typeAction === "UPDATE") {

            onSelectAgreement(agreement.id);
        }
    }

    if (!agreements) return <p>Carregando2...</p>;

    return (
        <div className={styles.parent}>

            <h1>CONVENIOS</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>CNPJ</th>
                    <th>CONTATO</th>
                    <th>STATUS DO CONVENIO</th>
                </tr>
                </thead>
                <tbody>
                {agreements.map((agreement, index) => (
                    <tr key={index}
                        onClick={() => action(agreement)}
                        className={agreementToSend === agreement ? styles.selected : ""}
                    >
                        <td>{agreement.customer.name}</td>
                        <td>{agreement.customer.cpf}</td>
                        <td>{agreement.customer.cnpj}</td>
                        <td>{agreement.customer.phoneNumber}</td>
                        <td>{agreement.status}</td>

                    </tr>
                ))}
                </tbody>
            </table>
            {(typeAction !== "UPDATE") && (
                <button
                    className={styles.button_add}
                    disabled={!agreementToSend} // Desabilita se nada for selecionado
                    onClick={() => onSelectAgreement(agreementToSend)}
                >
                    Selecionar
                </button>
            )}

        </div>
    )
}

export default TableAgreements;