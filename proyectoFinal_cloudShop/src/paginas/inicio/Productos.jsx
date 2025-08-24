import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productos from "../../data/productos";
import "./Productos.css";

function Productos({ tipo }) { 
  const productosFiltrados = productos.slice(0, 12); 
  const [indice, setIndice] = useState(0);
  const navigate = useNavigate();

  const mostrarSiguiente = () => {
    if (indice + 3 < productosFiltrados.length) {
      setIndice(indice + 3);
    }
  };

  const mostrarAnterior = () => {
    if (indice - 3 >= 0) {
      setIndice(indice - 3);
    }
  };

  const irAlProducto = (id) => {
    navigate(`/${tipo}/${id}`);
  };

  return (
    <div className="carrusel-container">
      <button className="carrusel-btn" onClick={mostrarAnterior}>◀</button>

      <div className="productos-wrapper">
        {productosFiltrados.slice(indice, indice + 3).map((p) => (
          <div
            className="producto-card"
            key={p.id}
            onClick={() => irAlProducto(p.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={p.img} alt={p.nombre} className="producto-img" />
            <div className="producto-nombre">{p.nombre}</div>
            <div className="descripcion">{p.descripcion}</div>
            <div className="precio">${p.precio}</div>
          </div>
        ))}
      </div>

      <button className="carrusel-btn" onClick={mostrarSiguiente}>▶</button>
    </div>
  );
}

export default Productos;
