import FormEmployee from "../../components/employee/FormEmployee";
import {useEmployees} from "../../components/hook/useEmployees";
import SelectObjects from "../../components/Several/SelectObjects";
import {useState} from "react";
import styles from "./Update.module.css"

function Update() {

    const {employees, loading, error} = useEmployees()
    const [idOperator, setIdOperator] = useState("");

    const typeForm = "UPDATE";
    return (
        <div className={styles.parent}>
            <div className={styles.child1}>
                <SelectObjects
                    objects={employees}
                    value={idOperator}
                    onChange={(e) => setIdOperator(e.target.value)}
                />
            </div>
            <div>
                <FormEmployee
                    typeForm={typeForm}
                    idUser={idOperator}
                />
            </div>

        </div>
    )
}

export default Update;