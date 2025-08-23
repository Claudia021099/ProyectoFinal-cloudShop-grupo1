
import { Link } from 'react-router-dom';
import productos from '../../data/productos';

function CatalogoLaptops() {
    return (
        <>
            <div className="caja-catalogo">
                <h1>LAPTOPS</h1><br />
                <div className="lista-productos">
                    {productos
                        .filter((product) => product.tipo === "LAPTOP")
                        .map((product) => (
                            <Link
                                to={`/laptop/${product.id}`}
                                key={product.id}
                                className="producto"
                            >
                                <div>
                                    <img src={product.img} className="img-catalogo" alt={product.nombre} />
                                    <h3>{product.nombre}</h3>
                                    <p>Precio: S/. {product.precio}</p>
                                </div>
                            </Link>
                        ))}
                </div>

            </div>
        </>
    )
}
export default CatalogoLaptops;