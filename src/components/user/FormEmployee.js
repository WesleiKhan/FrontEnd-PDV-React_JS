import styles from "./FormEmployee.module.css"
import {useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";

import { loginEmployee, registerEmployee } from "../../services/employee/EmployeeService";
import {useBoxOpened} from "../hook/useBoxOpened";



function FormEmployee({typeForm}) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [role, setRole] = useState("");

    const roles = ["ROLE_MANAGER", "ROLE_OPERATOR_BOX"]

    const navigate = useNavigate();

    const {box, error} = useBoxOpened(isLogged);

    useEffect(() => {
        if (!isLogged) return

        if (box === null) return;

        if (box) {
            navigate("/main")
        } else if (box === false) {
            navigate("/home")
        }

    }, [box, isLogged, navigate]);


        async function handleRegisterAndLogin(e) {
        e.preventDefault();


        const userData = {
            name,
            password,
        }

        if (typeForm === "REGISTER") {
            userData.role = role;
        }

        try {
            if (typeForm === "LOGIN") {
                const response = await loginEmployee(userData);
                const { token, refresh_token } = response.data;

                localStorage.setItem("token", token);
                localStorage.setItem("refresh_token", refresh_token);

                console.log("Login realizado com sucesso");

                setIsLogged(true);

                console.log(box);

            } else {
                const response = await registerEmployee(userData);
                console.log("Cadastro OK:", response.data);

                navigate("/home");
            }
        } catch (error) {
            console.error("Erro:", error.response?.data || error.message);
        }

    }


    return (
        <div className={styles.page_container}>
            <div className={styles.page_container_childOne}>
                <form className={styles.registerAndlogin_form} onSubmit={handleRegisterAndLogin}>

                    <input
                        className={styles.inputs}
                        type="text"
                        placeholder= "username"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        className={styles.inputs}
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {typeForm === "REGISTER" && (
                        <select
                            className={styles.inputs}
                            value={role}
                            onChange={e => setRole(e.target.value)}
                        >
                            <option value="" disabled>
                                ROLES
                            </option>

                            {roles.map((role) => (
                                <option>
                                    {role}
                                </option>
                            ))}
                        </select>
                    )}

                    <button type="submit" className={styles.button}>{typeForm}</button>
                </form>
            </div>
        </div>
    )
}

export default FormEmployee;