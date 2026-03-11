import { useEffect, useState } from "react";
import { viewEmployees } from "../../services/employee/EmployeeService";

export function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        viewEmployees()
            .then(res => setUsers(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
}
