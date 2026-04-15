import styles from "./Home.module.css"

import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <div className={styles.parent}>
            <div className={styles.container_top}>
                <button
                    className={styles.smallButton}
                    onClick={() => navigate("/box/start")}
                >
                    Iniciar Novo Caixa
                </button>
                <button
                    className={styles.smallButton}
                    onClick={() => navigate("/home/options")}
                >
                   Opções
                </button>
            </div>
            <div className={styles.container_principal}>
                <h1>
                   PDV
                </h1>
            </div>
        </div>
    )
}

export default Home;