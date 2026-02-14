import styles from "./FormUser.module.css"
import {useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";

import { loginUser, registerUser } from "../../services/user/UserService";
import {useBoxOpened} from "../hook/useBoxOpened";


function FormUser({typeForm}) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();

    const {box, error} = useBoxOpened(isLogged);

    useEffect(() => {
        if (!isLogged) return

        if (box === null) return;

        navigate(box ? "/main" : "/home");
    }, [box, isLogged, navigate]);


        async function handleRegisterAndLogin(e) {
        e.preventDefault();

        const userData = {
            name,
            password,
        }

        try {
            if (typeForm === "LOGIN") {
                const response = await loginUser(userData);
                const { token, refresh_token } = response.data;

                localStorage.setItem("token", token);
                localStorage.setItem("refresh_token", refresh_token);

                console.log("Login realizado com sucesso");


                setIsLogged(true);

                console.log(box);

            } else {
                const response = await registerUser(userData);
                console.log("Cadastro OK:", response.data);

                navigate("/login");
            }
        } catch (error) {
            console.error("Erro:", error.response?.data || error.message);
        }

    }


    return (
        <div className={styles.page_container}>
            <div className={styles.registerAndlogin_container} >
                <form className={styles.registerAndlogin_form} onSubmit={handleRegisterAndLogin}>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder= "username"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        className={styles.input}
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" className={styles.button}>{typeForm}</button>
                </form>
            </div>
        </div>
    )
}

export default FormUser;