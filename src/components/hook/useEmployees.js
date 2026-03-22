import { useEffect, useState } from "react";
import { viewEmployees } from "../../services/employee/EmployeeService";

export function useEmployees() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        viewEmployees()
            .then(res => setEmployees(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { employees, loading, error };
}
