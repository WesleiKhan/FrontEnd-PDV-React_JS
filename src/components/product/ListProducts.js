import {useGetProducts} from "../hook/useGetProducts";
import FormatedCoin from "../../utils/FormatedCoin";

import sttyles from "./ListProducts.module.css"
import ButtonAction from "../Several/ButtonAction";
import ButtonBack from "../Several/ButtonBack";

function ListProducts ({objects, onSelectProduct}) {

    if (!objects) return <p>Carregando...</p>;

    return (
        <div className={sttyles.parent}>
            <table className={sttyles.table}>
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
                    >
                        <td>{product.productName}</td>
                        <td>{FormatedCoin(product.value)}</td>
                        <td>{product.quantity}</td>
                        <td>
                            <button
                                onClick={() => onSelectProduct(product)}
                            >
                                Adicionar
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListProducts;