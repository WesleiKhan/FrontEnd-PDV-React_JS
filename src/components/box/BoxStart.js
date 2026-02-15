
import styles from "./BoxStart.module.css"
import {startBox} from "../../services/box/BoxService";
import SelectObjects from "../Several/SelectObjects";
import {useUsers} from "../hook/useUsers";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../Several/ButtonBack";


function BoxStart(){

    const { users, loading, error } = useUsers();
    const [ idOperator, setOperator] = useState("");

    const navigate = useNavigate();

    async function startNewBox(e) {
        e.preventDefault();

        const boxDate = {
            idOperator
        }

        try {
            const response = await startBox(boxDate);

            console.log(response)
            navigate("/main");
        }catch (error) {
            console.error("Erro:", error.response?.data || error.message);
        }
    }

    if (loading) return <p>Carregando operadores...</p>;
    if (error) return <p>Erro ao carregar operadores</p>;

    return (
        <div>
            <ButtonBack/>
            <div className={styles.container_Box}>

                <h1>Selecione o Operador Do Caixa</h1>

                <form onSubmit={startNewBox}>
                    <div className={styles.container_Users}>
                        <SelectObjects
                            objects={users}
                            value={idOperator}
                            onChange={(e) => setOperator(e.target.value)}/>
                    </div>
                    <button type="submit" className={styles.words_for_Users}> Start Box </button>
                </form>

            </div>
        </div>

    )
}

export default BoxStart;