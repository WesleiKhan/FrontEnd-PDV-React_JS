import './App.css';
import Login from "./pages/user/Login";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Register from "./pages/user/Register";
import BoxStart from "./components/box/BoxStart";
import BoxFinish from "./components/box/BoxFinish";
import ListProducts from "./components/product/ListProducts";
import MakeSale from "./components/sale/MakeSale";
import FinishSale from "./components/sale/FinishSale";
import BoxDetailsContainer from "./pages/box/BoxDetailsContainer";
import FormProduct from "./components/product/FormProduct";
import RegisterProduct from "./pages/product/RegisterProduct";
import UpdateProduct from "./pages/product/UpdateProduct";
import ProductsToEdit from "./pages/product/ProductsToEdit";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} />

          <Route path="/box/start" element={<BoxStart />} />
          <Route path="/box/finish" element={<BoxFinish />} />
          <Route path="/box/details" element={<BoxDetailsContainer />} />

          <Route path="/products/register" element={<RegisterProduct />} />
          <Route path="/products/update/:id" element={<UpdateProduct />} />
          <Route path="/products/to/update/" element={<ProductsToEdit />} />
          <Route path="/products" element={<ListProducts />} />

          <Route path="/sale/make" element={<MakeSale />} />
          <Route path="/sale/finish" element={<FinishSale />} />


      </Routes>
  );
}

export default App;
