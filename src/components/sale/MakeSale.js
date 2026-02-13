import {useGetProducts} from "../hook/useGetProducts";
import ListProducts from "../product/ListProducts";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../Several/ButtonBack";
import {useState} from "react";

import styles from "../sale/MakeSale.module.css"

function MakeSale () {

    const navigate = useNavigate();

    const {productsGet, loading, error} = useGetProducts();

    const [productsSale, setProductsSale] = useState([]);
    const [total, setTotal] = useState(0);


    function addProduct(product) {
        setProductsSale(prev => [...prev, product]);
        setTotal((prev => prev + Number(product.value)))
    }

    function endSale() {
        navigate("/dashboard", {
            state: {
                productsSale,
                total
            }
        });

    }

    if (loading) return <p>Carregando operadores...</p>;
    if (error) return <p>Erro ao carregar operadores</p>;

    return (
        <div>
            <ButtonBack/>
            <div className={styles.parent}>
                <div>
                    <ListProducts
                        objects={productsGet}
                        onSelectProduct={addProduct}
                    />

                </div>
                <button
                    className={styles.button_OK}
                    onClick={endSale}
                >
                    OK
                </button>
            </div>
        </div>

    );
}

export default MakeSale;