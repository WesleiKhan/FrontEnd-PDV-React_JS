import {useBoxOpened} from "../hook/useBoxOpened";
import styles from "./BoxFinish.module.css"

import {finishBox} from "../../services/box/BoxService";

import {useNavigate} from "react-router-dom";
import BoxDetails from "./BoxDetails";
import {useState} from "react";

function BoxFinish() {

    const [isLogged, setIsLogged] = useState(true);
    const navigate = useNavigate();

    const {box, error} = useBoxOpened(isLogged);

    async function action(e) {
        e.preventDefault();

        try {
            const response = await finishBox(box.id)

            console.log(response)
            navigate("/home")
        }catch (error) {
            console.log("Erro:", error.response?.data || error.message);
        }
    }

    if (!box) return <p>Carregando...</p>;

    if (error) return <p>Error ao obter caixa atual aberto para encerrar</p>;

    return (

        <div className={styles.parent}>

            <BoxDetails
                operator={box.operator.name}
                startDate={box.startDate}
                totalValue={box.totalValue}
                dinheiro={box.payments.DINHEIRO}
                pix={box.payments.PIX}
                debito={box.payments.DEBITO}
                credito={box.payments.CREDITO}
            />

            <div className={styles.child}>
                <button className={`${styles.button_finally} ${styles.cancel}`} onClick={() => navigate(-1)}>Cancelar</button>
                <button className={`${styles.button_finally} ${styles.finally_box}`} onClick={action} >Finalizar Caixa</button>
            </div>


        </div>
    )
}

export default BoxFinish;