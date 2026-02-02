import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { Login } from "./pages/login";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/Admin/AddProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
    </Routes>
  );
}

export default App;
