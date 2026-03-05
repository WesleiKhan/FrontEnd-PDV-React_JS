import {useNavigate} from "react-router-dom";

import styles from "./PoductMain.module.css"

function ProductMain() {
    const navigate = useNavigate();

    return (
        <div className={styles.parent}>
            <h1>MENU DE OPÇÕES DE PRODUTOS</h1>
            <div className={styles.children}>
                <button
                    onClick={() => navigate("/products/register")}
                >
                    Registrar
                </button>
                <button
                    onClick={() => navigate("/products/to/update/")}
                >
                    Editar
                </button>
            </div>

        </div>
    )
}

export default ProductMain;