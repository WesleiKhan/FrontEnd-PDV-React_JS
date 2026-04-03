import FormEmployee from "../../components/user/FormEmployee";
import {useEmployees} from "../../components/hook/useEmployees";
import SelectObjects from "../../components/Several/SelectObjects";
import {useState} from "react";

function Update() {

    const {employees, loading, error} = useEmployees()
    const [idOperator, setIdOperator] = useState("");

    const typeForm = "UPDATE";
    return (
        <div>
            <div>
                <SelectObjects
                    objects={employees}
                    value={idOperator}
                    onChange={(e) => setIdOperator(e.target.value)}
                />
            </div>
            <FormEmployee
                typeForm={typeForm}
                idUser={idOperator}
            />
        </div>
    )
}

export default Update;