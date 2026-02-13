import {useNavigate} from "react-router-dom";
import styles from "../Several/ButtonBack.module.css"

function ButtonBack() {
    const navigate = useNavigate();

    return (
        <div className={styles.parent_back}>
            <p
                className={styles.child}
                onClick={() => navigate(-1)}>
                ◀
            </p>
        </div>
    )
}

export default ButtonBack;