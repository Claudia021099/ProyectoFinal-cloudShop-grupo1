import { Header } from '../../componentes/header/Header'
import { Footer } from '../../componentes/footer/Footer'
import { Link } from 'react-router-dom';
import productos from '../../data/productos';
import '../catalogo/Catalogo.css'

export default function Catalogo() {
  return (
    <>
      <Header />
      <div className="caja-catalogo">
        <h1>Catálogo</h1><br />
        <div className="lista-productos">
          {productos.map((product) => (
            <Link
              to={`/catalogo/${product.id}`}
              key={product.id}
              className="producto"
            >
              <div>
                <img className='img-catalogo' src={product.img} alt={product.name} />
                <h3>{product.nombre}</h3>
                <p>Price: ${product.precio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

