import {useGetProducts} from "../hook/useGetProducts";
import ListProducts from "../product/ListProducts";
import {useNavigate} from "react-router-dom";
import ButtonBack from "../Several/ButtonBack";
import {useEffect, useState} from "react";

import styles from "../sale/MakeSale.module.css"
import {useGetInfoProductsSale} from "../hook/useGetInfoProductsSale";
import {ToWriteInfosOfProductsSale} from "../../services/sale/SaleService";

function MakeSale () {

    const infoProductsOfSale = useGetInfoProductsSale();

    const navigate = useNavigate();

    const {productsGet, loading, error} = useGetProducts();

    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (infoProductsOfSale) {
            setProducts(infoProductsOfSale.products);
            setTotal(Number(infoProductsOfSale.valueTotal.toFixed(2)))
        }
    }, [infoProductsOfSale]);



    async function addProduct(product) {

        const infoProduct = {
            id: product.id,
            productName: product.productName,
            value: product.value,
        }

        const newProducts = [...products, infoProduct];
        const newTotal = total + Number(product.value)

        setProducts(newProducts);
        setTotal(newTotal)

        const newInfo = {
            products: newProducts,
            valueTotal: newTotal
        };

        try {
            const response = await ToWriteInfosOfProductsSale(newInfo);

            console.log(response);
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
            <div className={styles.parent}>
                <div>
                    <ListProducts
                        objects={productsGet}
                        onSelectProduct={addProduct}
                    />
                </div>
            </div>
        </div>

    );
}

export default MakeSale;