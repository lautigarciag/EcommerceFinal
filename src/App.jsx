import { Header } from "./componentes/Header";
import { Producto } from "./componentes/Producto";
import { Login } from "./componentes/Login";
import { Form } from "./componentes/Form";
import { Footer } from "./componentes/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="container-head">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container-main">
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle s"}
                  precio={"$12000"}
                  cantidad={15}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle M"}
                  precio={"$12000"}
                  cantidad={1}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle L"}
                  precio={"$12500"}
                  cantidad={5}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle XL"}
                  precio={"$13000"}
                  cantidad={2}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle XXL"}
                  precio={"$12600"}
                  cantidad={6}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle s"}
                  precio={"$12800"}
                  cantidad={12}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle M"}
                  precio={"$11000"}
                  cantidad={13}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle XXL"}
                  precio={"$12600"}
                  cantidad={6}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle s"}
                  precio={"$12800"}
                  cantidad={12}
                />
                <Producto
                  nombre={"Buzo"}
                  descripcion={"Talle M"}
                  precio={"$11000"}
                  cantidad={13}
                />
              </div>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="form" element={<Form />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
