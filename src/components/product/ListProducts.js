
import FormatedCoin from "../../utils/FormatedCoin";

import styles from "./ListProducts.module.css"
import {useState} from "react";

function ListProducts ({objects, onSelectProduct}) {

    const [productToSend, setProductToSend] = useState();

    function action(product) {
        setProductToSend(product);
    }

    if (!objects) return <p>Carregando...</p>;

    return (
        <div className={styles.parent}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Preço do Produto</th>
                        <th>Quantidade do Produto</th>
                    </tr>
                    </thead>

                    <tbody>
                    {objects.map((product, index) => (
                        <tr key={index}
                            onClick={() => action(product)}
                            className={productToSend === product ? styles.selected : ""}
                        >
                            <td>{product.productName}</td>
                            <td>{FormatedCoin(product.value)}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button
                    className={styles.button}
                    disabled={!productToSend} // Desabilita se nada for selecionado
                    onClick={() => onSelectProduct(productToSend)}
                >
                    Adicionar
                </button>
        </div>
    )
}

export default ListProducts;