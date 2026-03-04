import FormProduct from "../../components/product/FormProduct";
import { useParams } from "react-router-dom";

function UpdateProduct() {

    const { id } = useParams();
    return (
        <div>
           <FormProduct
               typeForm={"UPDATE"}
               id={id}
           />
        </div>
    )
}

export default UpdateProduct;