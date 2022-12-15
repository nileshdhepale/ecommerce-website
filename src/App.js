import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Speakers } from "./pages/Speakers";
import { Watches } from "./pages/Watches";
import Earphones from "./pages/Earphones";
import Home from "./components/Home";
import ProductShow from "./pages/ProductShow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/earphones" element={<Earphones />} />
          <Route exact path="/speakers" element={<Speakers />} />
          <Route exact path="/watches" element={<Watches />} />
          <Route exact path="/product" element={<ProductShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
