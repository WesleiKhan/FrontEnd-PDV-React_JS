import { useEffect, useState } from "react";
import { viewUsers } from "../../services/user/UserService";

export function useUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        viewUsers()
            .then(res => setUsers(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { users, loading, error };
}
