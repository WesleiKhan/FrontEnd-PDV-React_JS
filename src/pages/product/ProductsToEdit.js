import ListProducts from "../../components/product/ListProducts";
import {useGetProducts} from "../../components/hook/useGetProducts";
import {useNavigate} from "react-router-dom";

function ProductsToEdit() {
    const {productsGet, loading, error} = useGetProducts();

    const navigate = useNavigate();

    function sendIdProduct(id) {
        navigate(`/products/update/${id}`);
        console.log(id);
    }

    if (loading) return <p>Carregando operadores...</p>;
    if (error) return <p>Erro ao carregar operadores</p>;

    return (
        <div>
            <ListProducts
                objects={productsGet}
                onSelectProduct={sendIdProduct}
                typeAction={"EditProduct"}
            />
        </div>
    )
}

export default ProductsToEdit;