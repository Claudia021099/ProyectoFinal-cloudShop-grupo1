
import { Link } from 'react-router-dom';
import productos from '../../data/productos';

function CatalogoGpus() {
    return (
        <>
            <div className="caja-catalogo">
                <h1>GPU</h1><br />
                <div className="lista-productos">
                    {productos
                        .filter((product) => product.tipo === "GPU")
                        .map((product) => (
                            <Link
                                to={`/gpu/${product.id}`}
                                key={product.id}
                                className="producto"
                            >
                                <div>
                                    <img
                                        className="img-catalogo"
                                    />
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
export default CatalogoGpus;