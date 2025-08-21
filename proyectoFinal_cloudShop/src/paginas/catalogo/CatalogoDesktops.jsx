
import { Link } from 'react-router-dom';
import productos from '../../data/productos';

function CatalogoDesktops() {
    return (
        <>
            <div className="caja-catalogo">
                <h1>DESKTOPS</h1><br />
                <div className="lista-productos">
                    {productos
                        .filter((product) => product.tipo === "DESKTOP")
                        .map((product) => (
                            <Link
                                to={`/desktop/${product.id}`}
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
export default CatalogoDesktops;