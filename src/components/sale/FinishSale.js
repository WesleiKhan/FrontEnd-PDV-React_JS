import {useBoxOpened} from "../hook/useBoxOpened";

import {useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

import {MakeSale} from "../../services/sale/SaleService"

import styles from "./FinishSale.module.css"

import FormatedCoin from "../../utils/FormatedCoin";
import {useGetInfoProductsSale} from "../hook/useGetInfoProductsSale";
import {useGetAgreementSelect} from "../hook/useGetAgreementSelect";

function FinishSale(props) {

    const {agreement} = useGetAgreementSelect()

    const infoProductsOfSale = useGetInfoProductsSale();

    const navigate = useNavigate();

    const dateHour = new Date().toLocaleString("pt-BR");

    const {box, error} = useBoxOpened(true);

    const [payments, setPayments] = useState({});
    const [valueSale, setValueSale] = useState("");

    const [remainingTotal, setRemainingTotal] = useState(0);

    const [installment, setInstallment] = useState(0);

    const installments = [1,2,3,4,5,6,7,8,9,10,11,12];

    const [paymentType, setPaymentType] = useState(null);

    useEffect(() => {
        if (infoProductsOfSale) {
            setRemainingTotal(
                Number(infoProductsOfSale.valueTotal.toFixed(2))
            );
        }
    }, [infoProductsOfSale]);

    // SÓ AQUI VERIFICA
    if (!infoProductsOfSale) {
        return <p>Carregando venda...</p>;
    }

    const products = infoProductsOfSale.products.map(p => p.id);

    function registerPayment(type) {

        const remaining = Number(remainingTotal.toFixed(2));
        const value = Number(parseFloat(valueSale).toFixed(2));

        if (!value || value <= 0) return;

        if (value > remaining) {
            alert("Valor maior que o restante da venda");
            return;
        }

        setPayments(prev => {

            const current =
                typeof prev[type] === "object"
                    ? prev[type].valuePayment
                    : (prev[type] || 0);

            return {
                ...prev,
                [type]: {
                    valuePayment: Number((current + value).toFixed(2)),

                    ...(type === "CREDITO" && installment
                        ? { installments: installment }
                        : {})
                }
            };
        });

        setRemainingTotal(prev =>
            Number((prev - value).toFixed(2))
        );

        setValueSale("");
    }

    if (!products || infoProductsOfSale.valueTotal == null) {
        return <p>Dados da venda não encontrados</p>;
    }


    async function handleFinishSale(e) {
        e.preventDefault();


        if (remainingTotal > 0.009) {
            alert("Ainda falta pagar parte da venda");
            return;
        }

        const saleDate = {
            boxId: box?.id,
            items: {
                products
            },
            payment: {
                infoPayment: payments
            }
        }

        console.log(box);
        console.log(saleDate);

        try {
            const response = await MakeSale(agreement?.id ,saleDate);

            console.log(response);
            navigate("/main")
        }catch (error) {

            console.error("Erro:", error.response?.data || error.message);
        }

    }



    return (
        <div className={styles.parent}>

            <div className={styles.top_bar}>
                <h1>Total Da Venda: {FormatedCoin(infoProductsOfSale.valueTotal)}</h1>
                <h2>{dateHour}</h2>
            </div>

            <div className={styles.title}>
                <h1>DISTRIBUIÇÃO DE PAGAMENTO</h1>
            </div>

            <div className={styles.container_childOne}>
                <form className={styles.form_parent} onSubmit={handleFinishSale}>

                    <div className={styles.containerPaymentButtons}>

                        <button className={`${styles.buttonsPaymnets} ${styles.pix} ${
                            paymentType === "PIX" ? styles.selected : ""
                        }`} type="button" onClick={() =>
                            setPaymentType("PIX")}
                        >PIX</button>

                        <button className={`${styles.buttonsPaymnets} ${styles.dinheiro} ${
                            paymentType === "DINHEIRO" ? styles.selected : ""
                        }`} type="button" onClick={() =>
                            setPaymentType("DINHEIRO")}
                        >DINHEIRO</button>

                        <button className={`${styles.buttonsPaymnets} ${styles.credito} ${
                            paymentType === "CREDITO" ? styles.selected : ""
                        }`} type="button" onClick={() =>
                            setPaymentType("CREDITO")}
                        >CRÉDITO</button>

                        <button className={`${styles.buttonsPaymnets} ${styles.debito} ${
                            paymentType === "DEBITO" ? styles.selected : ""
                        }`} type="button" onClick={() =>
                            setPaymentType("DEBITO")}
                        >DÉBITO</button>

                    </div>

                    {paymentType === "CREDITO" && (
                        <div className={styles.container_Installmet}>
                            <select
                                className={styles.installmet_Select}
                                value={installment}
                                onChange={e => setInstallment(Number(e.target.value))}
                            >
                                <option value="" >
                                    Parcelas
                                </option>

                                {installments.map((item) => (
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <div className={styles.container_ButtonAddValue}>
                        <button className={styles.buttonAddValue}  type="button" onClick={() => registerPayment(paymentType)}>Adicionar Pagamento</button>
                    </div>


                    <div className={styles.containerRemainingTotal}>
                        <div className={styles.containerRemainingTotalChild}>
                            <h1>VALOR A DISTRIBUIR: {FormatedCoin(remainingTotal)}</h1>
                        </div>
                    </div>


                    <div className={styles.inputContainer}>
                        <h1>Valor Da Venda:</h1>
                        <input
                            type="number"
                            step="0.01"
                            id="valorVenda"
                               value={valueSale}
                               onChange={e => setValueSale(e.target.value)}
                               />
                    </div>

                    <div className={styles.finishButton}>
                        <button className={styles.cancelar} onClick={() => navigate(-1)}>CANCELAR</button>
                        <button className={styles.confirmar} type="submit">CONFIRMAR</button>
                    </div>

                    </form>

            </div>

        </div>

    )
}

export default FinishSale;