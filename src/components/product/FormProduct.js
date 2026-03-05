import {useState} from "react";
import {
    createProduct,
    updateProduct
} from "../../services/product/ProductService";
import {useNavigate} from "react-router-dom";

import styles from "./FormProduct.module.css"

function FormProduct({typeForm, id}) {

    const navigate = useNavigate();

    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [value, setValue] = useState('');


    async function handleRegisterAndUpdateProduct(e) {
        e.preventDefault();

        const productDate = {
            productName: productName,
            quantity: Number(quantity),
            value: value,
        }

        try {
            if (typeForm === "REGISTER") {
                const response = await createProduct(productDate);

                console.log(response);

                navigate("/products/to/update/");

            } else if (typeForm === "UPDATE") {
                const response = await updateProduct(id, productDate);

                console.log(productDate, id);

                console.log(response);

                navigate("/products/to/update/");
            }

        }catch (error) {
            console.error("Erro:", error.response?.data || error.message);
        }

    }



    return (
        <div className={styles.parent}>
            <div className={styles.child}>
                <form className={styles.form_product}  onSubmit={handleRegisterAndUpdateProduct}>
                    <input
                        type="text"
                        placeholder="Nome Do Produto"
                        value={productName}
                        onChange={e => setProductName(e.target.value)}/>
                    <input
                        type="number"
                        placeholder="Quantidade"
                        value={quantity}
                        step="1"
                        onChange={e => setQuantity(e.target.value)}/>
                    <input
                        type="number"
                        placeholder="Valor"
                        value={value}
                        step="0.01"
                        onChange={e => setValue(e.target.value)}/>

                    <button type="submit">Enviar</button>
                </form>
            </div>

        </div>
    )
}

export default FormProduct;