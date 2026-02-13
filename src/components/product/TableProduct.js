import styles from "./ListProducts.module.css";
import FormatedCoin from "../../utils/FormatedCoin";

function TableProduct({ products }) {
    return (
        <div className={styles.parent_table}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Nome do Produto</th>
                    <th>Preço do Produto</th>
                </tr>
                </thead>

                <tbody>
                {products.map((product, index) => (
                    <tr key={index}
                    >
                        <td>{product.productName}</td>
                        <td>{FormatedCoin(product.value)}</td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct;