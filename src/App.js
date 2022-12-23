import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductShow from "./pages/ProductShow";
import Cart from "./components/Cart";
import Form from "../src/components/common/Form";
import { useState } from "react";
import { app } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  // const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleAction = (id) => {
  //   const authentication = getAuth();
  //   if (id === 2) {
  //     createUserWithEmailAndPassword(authentication, email, password).then(
  //       (response) => {
  //         sessionStorage.setItem(
  //           "Auth Token",
  //           response._tokenResponse.refreshToken
  //         );
  //       }
  //     );
  //   }

  //   if (id === 1) {
  //     signInWithEmailAndPassword(authentication, email, password).then(
  //       (response) => {
  //         navigate("/");
  //         sessionStorage.setItem(
  //           "Auth Token",
  //           response._tokenResponse.refreshToken
  //         );
  //       }
  //     );
  //   }
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route
            path="/login"
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          /> */}

          <Route exact path="/product" element={<ProductShow />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
