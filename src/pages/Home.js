import styles from "./Home.module.css"

import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <div className={styles.parent}>
            <div className={styles.container_top}>
                <p
                    onClick={() => navigate("/box/start")}
                >
                    Start Box
                </p>
                <p>
                    Edit Products
                </p>
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