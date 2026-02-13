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

        <div >

            <BoxDetails
                operator={box.operator.name}
                startDate={box.startDate}
                totalValue={box.totalValue}
                dinheiro={box.payments.DINHEIRO}
                pix={box.payments.PIX}
                debito={box.payments.DEBITO}
                credito={box.payments.CREDITO}
            />

            <button onClick={action}>Finalizar</button>

        </div>
    )
}

export default BoxFinish;