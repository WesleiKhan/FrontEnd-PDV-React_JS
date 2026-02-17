import BoxDetails from "../../components/box/BoxDetails";
import {useBoxOpened} from "../../components/hook/useBoxOpened";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../../components/Several/ButtonBack";

function BoxDetailsContainer() {

    const navigate = useNavigate();

    const {box, error} = useBoxOpened(true);

    if (error) return <p>Erro...</p>;
    if (!box) return <p>Carregando...</p>;

    console.log(box.box);


    return (
        <div>
            <BoxDetails
                operator={box.operator}
                startDate={box.startDate}
                totalValue={box.totalValue}
                dinheiro={box.payments.DINHEIRO}
                pix={box.payments.PIX}
                debito={box.payments.DEBITO}
                credito={box.payments.CREDITO}
            />
        </div>
    )
}

export default BoxDetailsContainer;