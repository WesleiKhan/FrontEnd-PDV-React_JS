import './App.css';
import Login from "./pages/employee/Login";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Register from "./pages/employee/Register";
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
import ChoiceMenu from "./pages/ChoiceMenu";
import TableAgreements from "./components/agreement/TableAgreements";
import SelectAgreement from "./components/agreement/SelectAgreement";
import Update from "./pages/employee/Update";
import RegisterCustomer from "./pages/customer/RegisterCustomer";
import UpdateCustomer from "./pages/customer/UpdateCustomer";
import UpdateAgreement from "./pages/agreement/UpdateAgreement";
import RegisterAgreement from "./pages/agreement/RegisterAgreement";
import Options from "./pages/Options";


function App() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<Update />} />

          <Route path="/home" element={<Home />} />
          <Route path="/home/options" element={<Options />} />
          <Route path="/main" element={<Main />} />

          <Route path="/box/start" element={<BoxStart />} />
          <Route path="/box/finish" element={<BoxFinish />} />
          <Route path="/box/details" element={<BoxDetailsContainer />} />

          <Route path="/products/main" element={<ChoiceMenu/>} />
          <Route path="/products/register" element={<RegisterProduct />} />
          <Route path="/products/update/:id" element={<UpdateProduct />} />
          <Route path="/products/to/update/" element={<ProductsToEdit />} />
          <Route path="/products" element={<ListProducts />} />

          <Route path="/sale/make" element={<MakeSale />} />
          <Route path="/sale/finish" element={<FinishSale />} />

          <Route path="/customer/register" element={<RegisterCustomer />} />
          <Route path="/customer/update" element={<UpdateCustomer />} />

          <Route path="/agreement/register" element={<RegisterAgreement />} />
          <Route path="/agreement/agreements" element={<TableAgreements/>} />
          <Route path="/agreement/select" element={<SelectAgreement/>} />
          <Route path="/agreement/update" element={<UpdateAgreement />} />
      </Routes>
  );
}

export default App;
