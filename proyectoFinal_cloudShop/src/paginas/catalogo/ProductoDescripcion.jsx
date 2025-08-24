import { useParams, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import productos from "../../data/productos";
import "./ProductoDescripcion.css";

function Stars({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="stars" aria-label={`Rating ${value} de 5`}>
      {"★".repeat(full)}
      {half ? "☆" : ""}
      {"☆".repeat(empty)}
    </span>
  );
}

function ProductDescripcion({ onAddToCart, isLoggedIn }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  const producto = productos.find((p) => p.id === Number(productId));
  if (!producto) return <div className="notfound">Producto no encontrado</div>;

  const similares = productos.filter((p) => producto.similares?.includes(p.id));

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    onAddToCart(producto);
  };

  return (
    <div className="producto-descripcion">
      <div className="pd-header">
        <div className="pd-galeria">
          <div className="contenedor-catalogo">
            {/*imagen en duro */}
            <img src={producto.img} className='img-descripcion-producto' alt={producto.nombre} />
            {/* <img src={imgMostrada} alt={producto.nombre} /> */}
          </div>
          {producto.galeria?.length > 0 && (
            <div className="pd-thumbs">
              {producto.galeria.map((src) => (
                <button
                  key={src}
                  className={`thumb ${imgMostrada === src ? "activa" : ""}`}
                  onClick={() => setImgActiva(src)}
                  aria-label="Vista en miniatura"
                >
                  <img src={src} alt="miniatura" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detalle del producto */}
        <div className="pd-info">
          <h1 className="pd-titulo">{producto.nombre}</h1>
          <div className="pd-rating">
            <Stars value={producto.rating || 0} />
            <span className="pd-rating-num">
              {(producto.rating ?? 0).toFixed(1)} • {producto.reseñas?.length ?? 0} reseñas
            </span>
          </div>
          <div className="pd-precio">
            <span className="moneda">{producto.moneda || "S/"}</span>
            <span className="monto">
              {(producto.precio ?? 0).toLocaleString()}
            </span>
          </div>

          <p className="pd-descripcion">
            {producto.descripcion ??
              "Equipo ideal para clases en línea y tareas de oficina. Excelente relación precio/rendimiento."}
          </p>

          <div className="pd-cta">
            <button className="btn-primario" onClick={handleAddToCart}>
              Agregar carrito
            </button>
            <button className="btn-like" aria-label="Guardar en favoritos">
              ♡
            </button>
          </div>

        </div>
      </div>

      {/* Productos similares: Falta agregar en la Data */}
      {similares.length > 0 && (
        <>
          <h2 className="pd-subtitulo">Productos similares</h2>
          <div className="pd-similares">
            {similares.map((s) => (
              <Link
                key={s.id}
                to={`/catalogo/${s.id}`}
                className="card-similar"
                title={s.nombre}
              >
                <img src={s.imagen} alt={s.nombre} />
                <div className="card-info">
                  <p className="nombre">{s.nombre}</p>
                  <p className="precio">
                    {s.moneda} {s.precio.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Reseñas: falta agregar en la Data*/}
      <h2 className="pd-subtitulo">Reseñas</h2>
      <div className="pd-reseñas">
        {producto.reseñas?.length ? (
          producto.reseñas.map((r, i) => (
            <div key={i} className="card-reseña">
              <div className="r-header">
                <div className="r-avatar" aria-hidden>
                  👤
                </div>
                <div>
                  <strong>{r.autor}</strong>
                  <div className="r-meta">{r.fecha}</div>
                </div>
              </div>
              <div className="r-stars">
                {"★".repeat(r.estrellas)}{"☆".repeat(5 - r.estrellas)}
              </div>
              <p className="r-texto">{r.texto}</p>
            </div>
          ))
        ) : (
          <div className="card-reseña">Sé el primero en opinar.</div>
        )}
      </div>
    </div>
  );
}

export default ProductDescripcion;