import {useNavigate} from "react-router-dom";

import styles from "./ChoiceMenu.module.css"

function ChoiceMenu({menu_title, url_Register, url_Update, url_Delete}) {
    const navigate = useNavigate();

    return (
        <div className={styles.parent}>
            <h1>{menu_title}</h1>
            <div className={styles.children}>
                <button
                    onClick={() => navigate(url_Register)}
                >
                    Registrar
                </button>
                <button
                    onClick={() => navigate(url_Update)}
                >
                    Editar
                </button>
                <button
                    onClick={() => navigate(url_Delete)}
                >
                    Deletar
                </button>
            </div>

        </div>
    )
}

export default ChoiceMenu;