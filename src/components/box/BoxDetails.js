import FormatedDateHours from "../../utils/FormatedDateHours"
import FormatedCoin from "../../utils/FormatedCoin"
import styles from "./BoxDetails.module.css"


function BoxDetails({operator, startDate, totalValue, dinheiro, pix, debito, credito}) {

    return (
        <div className={styles.parente}>
            <h1>Resumo Do Caixa</h1>

            <h2>Operador: {operator ?? "-"}</h2>

            <h2>Aberto em: {FormatedDateHours(startDate)}</h2>

            <h2>Total Do Caixa: {FormatedCoin(totalValue)}</h2>

            <h2>Total Em Dinheiro: {FormatedCoin(dinheiro)}</h2>

            <h2>Total Em Pix: {FormatedCoin(pix)}</h2>

            <h2>Total Em Debito: {FormatedCoin(debito)}</h2>

            <h2>Total Em Credito: {FormatedCoin(credito)}</h2>

        </div>
    )
}

export default BoxDetails;