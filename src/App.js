import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductShow from "./pages/ProductShow";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<ProductShow />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
