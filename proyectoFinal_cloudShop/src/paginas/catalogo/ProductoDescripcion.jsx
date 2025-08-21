import { useParams, Link } from 'react-router-dom';
import productos from '../../data/productos';
import './ProductoDescripcion.css';

function ProductDescription() {
  const { productId } = useParams();
  const producto = productos.find((p) => p.id === parseInt(productId));

  if (!producto) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="producto-descripcion">
        <h1>{producto.nombre}</h1>
        <img className='img-producto-descripcion' alt={producto.name} />
        <p>{producto.descripcion}</p><br />
        <p className='precio-producto'>Price: ${producto.precio}</p><br />
        <button className='btn-añadir-carrito'>Añadir al carrito</button><br />
        <Link to="/catalogo" className="back-link">
          Back to Catalog
        </Link>
      </div>
    </>
  );
}
export default ProductDescription;