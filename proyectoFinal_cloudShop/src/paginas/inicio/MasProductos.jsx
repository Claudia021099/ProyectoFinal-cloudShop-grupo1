import { Link } from 'react-router-dom';
import productos from "../../data/productos";
import './MasProductos.css';

function MasProductos() {
  const productosSeleccionados = productos.filter(producto =>
    [30, 36, 37, 38, 39].includes(producto.id)
  );

  return (
    <section className="catalogo">
      {productosSeleccionados.map(producto => (
        <Link
          to={`/desktop/${producto.id}`}
          key={producto.id}
          className="card"
        >
          <img src={producto.img} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          <p className="precio">Precio: S/ {producto.precio}</p>
          <p className="estado">{producto.estado}</p>
        </Link>
      ))}
    </section>
  );
}

export default MasProductos;

