
import { Link } from 'react-router-dom';
import productos from '../../data/productos';

function CatalogoCpus() {
    return (
        <>
            <div className="caja-catalogo">
                <h1>CPU</h1><br />
                <div className="lista-productos">
                    {productos
                        .filter((product) => product.tipo === "CPU")
                        .map((product) => (
                            <Link
                                to={`/cpu/${product.id}`}
                                key={product.id}
                                className="producto"
                            >
                                <div>
                                    <img src={product.img} className="img-catalogo" alt={product.nombre} />
                                    <h3>{product.nombre}</h3>
                                    <p>Price: ${product.precio}</p>
                                </div>
                            </Link>
                        ))}
                </div>

            </div>
        </>
    )
}
export default CatalogoCpus;