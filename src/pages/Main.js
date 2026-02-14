import styles from "./Dashboard.module.css";
import ButtonAction from "../components/Several/ButtonAction";
import {useBoxOpened} from "../components/hook/useBoxOpened";

import {useLocation, useNavigate } from "react-router-dom";

import FormatedCoin from "../utils/FormatedCoin";
import TableProduct from "../components/product/TableProduct";
import {useState} from "react";

function Main() {

    const [isLogged, setIsLogged] = useState(true);

    const navigate = useNavigate();

    const location = useLocation();
    const state = location.state || {};

    const {
        productsSale = [],
        total = 0
    } = state;

    const products = productsSale.map(product => product.id)

    const {box, error} = useBoxOpened(isLogged);

    function endSale() {
        navigate("/sale/finish", {
            state: {
                products,
                total
            }
        });

    }

    if (!box) return <p>Carregando...</p>;
    if (error) return <p>Erro...</p>;

    if (!products || total == null) {
        return <p>Dados da venda não encontrados</p>;
    }

    console.log(box);

    return (
        <div className={styles.parent}>

            <div className={styles.container_collum_right}>

                <div className={styles.container_top_right}>
                    <h2>Operador Do Caixa - Ativo: ({box.operator ?? "-"})</h2>
                </div>

                <div className={styles.container_valueSale}>
                    <h2>
                        Valor Total Da Venda
                    </h2>
                    <h1>
                        {FormatedCoin(total)}
                    </h1>
                </div>


                <div className={styles.container_middle_showList}>
                    <TableProduct
                        products={productsSale}
                    />
                </div>


            </div>

            <div className={styles.container_borde_left}>
                <div className={styles.container_left}>

                    <h1>PDV</h1>

                    <ButtonAction
                        type={"Encerrar Venda"}
                        onClick={endSale}
                    />

                    <ButtonAction
                        url={"/sale/make"}
                        type={"Lista De Produtos"}
                    />

                    <ButtonAction
                        url={"/box/details"}
                        type={"Resumo Do Caixa"}
                    />

                    <ButtonAction
                        url={"/box/finish"}
                        type={"Encerrar Caixar"}
                    />
                </div>
            </div>

        </div>
    )
}

export default Main;