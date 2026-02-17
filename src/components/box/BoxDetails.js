import FormatedDateHours from "../../utils/FormatedDateHours"
import FormatedCoin from "../../utils/FormatedCoin"
import styles from "./BoxDetails.module.css"
import ButtonBack from "../Several/ButtonBack";
import CashCharts from "../../utils/CashCharts";


function BoxDetails({operator, startDate, totalValue, dinheiro, pix, debito, credito}) {

    return (
        <div className={styles.parente}>
            <div className={styles.child_top}>
                <ButtonBack/>  <h1>Resumo Do Caixa</h1>
            </div>

            <div className={styles.child_info_total_money_by_type}>
                <div className={`${styles.container_money} ${styles.dinheiro}`}>
                    <h2>Total Em Dinheiro</h2>
                    <h1>{FormatedCoin(dinheiro)}</h1>
                </div>
                <div className={`${styles.container_money} ${styles.pix}`}>
                    <h2>Total Em Pix</h2>
                    <h1>{FormatedCoin(pix)}</h1>
                </div>
                <div className={`${styles.container_money} ${styles.debito}`}>
                    <h2>Total Em Débito</h2>
                    <h1>{FormatedCoin(debito)}</h1>
                </div>
                <div className={`${styles.container_money} ${styles.credito}`}>
                    <h2>Total Em Crédito</h2>
                    <h1>{FormatedCoin(credito)}</h1>
                </div>
            </div>

            <div className={styles.container_rest_infmortaion}>
                <div className={styles.container_rest_infmortaion_child}>

                    <div className={`${styles.container_money} ${styles.total_value}`}>
                        <h2>Total Do Caixa</h2>
                        <h1>{FormatedCoin(totalValue)}</h1>
                    </div>

                    <div className={styles.container_rest_infmortaion_childTwo}>
                        <h2>Nome Do Operador</h2>
                        <h1>{operator ?? "-"}</h1>

                        <h2>Data De Abertura Do Caixa</h2>
                        <h1>{FormatedDateHours(startDate)}</h1>
                    </div>

                </div>

                <div className={styles.container_rest_infmortaion_Grafic}>

                    <h1>Grafico:</h1>

                    <div>
                        <CashCharts
                            dinheiro={dinheiro}
                            pix={pix}
                            debito={debito}
                            credito={credito}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BoxDetails;