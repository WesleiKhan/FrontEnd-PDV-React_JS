import {useEffect, useState} from "react";

import {getBoxOpened} from "../../services/box/BoxService";

export function useBoxOpened(isLogged) {

    const [box, setBox] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!isLogged) return;

        getBoxOpened()
            .then(res => setBox(res.data))
            .catch(err => {

                if (err.response?.status === 404) {
                    // operador não tem caixa aberto
                    setBox(false);
                } else {
                    setError(err);
                }

            });

        }, [isLogged]);

        return {box, error};
}

