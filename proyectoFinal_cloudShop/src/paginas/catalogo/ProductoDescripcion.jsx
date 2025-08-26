import { useParams, Link, useNavigate } from "react-router-dom";
import productos from "../../data/productos";
import "./ProductoDescripcion.css";
import { useState, useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ProductDescripcion({ isLoggedIn, agregarCarrito, handleClick }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [imgMostrada, setImgMostrada] = useState(null);

  const producto = productos.find((p) => p.id === Number(productId));
  if (!producto) return <div className="notfound">Producto no encontrado</div>;

  const similares = productos.filter((p) => p.tipo === producto.tipo);


  const thumbsRef = useRef(null);
  const scrollThumbs = (dir = 1) => {
    thumbsRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };
  return (
    <div className="producto-descripcion">
      <div className="pd-header">
        <div className="pd-galeria">
          <div className="pd-imagen">
            <img
              src={imgMostrada || producto.img}
              alt={producto.nombre}
              className="pd-img"
            />
          </div>

          {producto.galeria?.length > 0 && (
            <div className="pd-thumbs-wrapper">
              <button
                type="button"
                className="thumb-nav prev"
                onClick={() => scrollThumbs(-1)}
                aria-label="Anterior"
              >
                ‹
              </button>

              <div className="pd-thumbs" ref={thumbsRef}>
                {producto.galeria.map((src) => (
                  <button
                    key={src}
                    className={`thumb ${imgMostrada === src ? "activa" : ""}`}
                    onClick={() => setImgMostrada(src)}
                    aria-label="Miniatura"
                  >
                    <img src={src} alt="miniatura" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="thumb-nav next"
                onClick={() => scrollThumbs(1)}
                aria-label="Siguiente"
              >
                ›
              </button>
            </div>
          )}
        </div>

        <div className="pd-info">
          <h1 className="pd-titulo">{producto.nombre}</h1>

          <div className="pd-rating">
            <div className="stars">
              {(() => {
                const promedio = producto.resenias.reduce((acc, r) => acc + r.estrellas, 0) / producto.resenias.length;
                const estrellasLlenas = Math.round(promedio);
                return (
                  <>
                    {"★".repeat(estrellasLlenas)}
                    {"☆".repeat(5 - estrellasLlenas)}
                  </>
                );
              })()}
            </div>
            <span className="pd-rating-num">
              {producto.resenias?.length ?? 0}{""}
              {producto.resenias?.length === 1 ? "reseña" : "reseñas"}
            </span>
          </div>
          <hr className="pd-separador" />
          <div className="pd-precio">
            {producto.estado === "DESCUENTO" ? (
              <>
                <p className="monto" style={{ textDecoration: "line-through" }}>
                  S/. {Number(producto.precio).toFixed(2)}
                </p>
                <p className="monto" style={{ color: "red", fontWeight: "bold" }}>
                  S/. {(Number(producto.precio) * 0.8).toFixed(2)}
                </p>
              </>
            ) : (
              <>
                <span className="moneda">{producto.moneda || "S/. "}</span>
                <span className="monto">{Number(producto.precio ?? 0).toLocaleString()}</span>
              </>
            )}
          </div>
          <hr className="pd-separador" />
          <p className="pd-descripcion">
            {producto.descripcion ??
              "Equipo ideal para clases en línea y tareas de oficina. Excelente relación precio/rendimiento."}
          </p>
            <button
              className="btn-primario"
              onClick={() => {
                agregarCarrito(producto);
                handleClick?.();
              }}
            >
              Agregar al carrito
            </button>
        </div>
      </div>
      <hr className="seccion-separador" />
      <h1 className="pd-subtitulo">Productos Similares</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween:16 },
          1024: { slidesPerView: 3, spaceBetween:16 },
          1224: { slidesPerView: 4, spaceBetween:16 },
          1440: { slidesPerView: 5, spaceBetween:16 }
        }}
        className="productos-similares"
      >
        {similares.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/cpu/${product.id}`} className="slide-producto">
                <div className="card-producto">
                  <img
                    src={product.img}
                    className="imagen-productos-similares"
                    alt={product.nombre}
                  />
                  <h3>{product.nombre}</h3>
                  <div className="stars">
                    {(() => {
                      const promedio = product.resenias.reduce((acc, r) => acc + r.estrellas, 0) / product.resenias.length;
                      const estrellasLlenas = Math.round(promedio);
                      return (
                        <>
                          {"★".repeat(estrellasLlenas)}
                          {"☆".repeat(5 - estrellasLlenas)}
                        </>
                      );
                    })()}
                  </div>
                  <p className="precio">S/. {(product.precio).toFixed(2)}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
       <hr className="seccion-separador" />
      <h2 className="pd-subtitulo">Reseñas</h2>
      <div className="pd-resenias">
        {producto.resenias?.length ? (
          producto.resenias.map((resenia, index) => (
            <div key={index} className="card-resenia">
              <div className="resenia-left">
                <div className="resenia-avatar">👤</div>
                <div className="resenia-info">
                  <strong className="resenia-name">{resenia.autor}</strong>
                  <div className="resenia-time">{resenia.fecha}</div>
                  <div className="stars">
                    {"★".repeat(resenia.estrellas)}
                    {"☆".repeat(5 - resenia.estrellas)}
                  </div>
                </div>
              </div>
              <p className="resenia-comentario">{resenia.comentario}</p>
            </div>
          ))
        ) : (
          <div className="card-resenia">Sé el primero en opinar.</div>
        )}
      </div>
    </div>
  );
}

export default ProductDescripcion;