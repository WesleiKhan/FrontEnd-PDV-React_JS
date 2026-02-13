import {useNavigate} from 'react-router-dom';
import styles from "./ButtonAction.module.css"

function ButtonAction({url, type, onClick}) {

    const navigate = useNavigate();

    function handleClick() {
        if (onClick) {
            onClick();
            return;
        }

        if (url) {
            navigate(url);
        }
    }

    return (
        <div>
            <button className={styles.container_button} onClick={handleClick}>
                {type}
            </button>
        </div>
    )
}

export default ButtonAction;