import "../estilos/producto.css";
import image from "../buzos/buzo1.jpg";
import { useState } from "react";

export function Producto({ nombre, descripcion, precio, cantidad }) {
  const [comprar, setComprar] = useState();

  return (
    <div className="container-producto">
      <img src={image} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <p>Cantidad disponible: {cantidad}</p>
      <button
        onClick={() => {
          setComprar("Gracias por su compra");
        }}
      >
        Comprar
      </button>
      <p>{comprar}</p>
    </div>
  );
}
