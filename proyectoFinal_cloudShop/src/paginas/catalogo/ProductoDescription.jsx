import { useParams, Link } from 'react-router-dom';
import productos from '../../data/productos';
import './ProductDescription.css';
import Header from '../../componentes/header/Header';
import { Footer } from '../../componentes/footer/Footer';

function ProductDescription() {
  const { productId } = useParams();
  const producto = productos.find((p) => p.id === parseInt(productId));

  if (!producto) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="producto-descripcion">
        <h1>{producto.nombre}</h1>
        <img className='img-producto-descripcion' src={producto.img} alt={producto.name} />
        <p>{producto.descripcion}</p><br />
        <p className='precio-producto'>Price: ${producto.precio}</p>
        <Link to="/catalogo" className="back-link">
          Back to Catalog
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default ProductDescription;
