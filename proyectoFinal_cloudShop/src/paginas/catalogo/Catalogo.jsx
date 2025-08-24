
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";              // estilos base
import "swiper/css/navigation";   // estilos de flechas
import "swiper/css/pagination";   // estilos de paginación
import '../catalogo/Catalogo.css';
import laptopsImg from '../../assets/catalogo/laptops.jpg';
import desktopImg from '../../assets/catalogo/desktop.png';
import audioImg from '../../assets/catalogo/headphones.png';
import cpuImg from '../../assets/catalogo/cpus.jpg';
import gpuImg from '../../assets/catalogo/gpus.jpg';
import imgBanner1 from '../../assets/homeImg/banner1.webp';
import productos from '../../data/productos';

function Catalogo() {
  return (
    <>
      <div className="caja-catalogo">
        <div className='contenedor-catalogo'>
          <Link to="/laptop">
            <div className='catalogo-productos'>
              <img src={laptopsImg} className='img-atalogo-productos' />
              <h3>LAPTOPS</h3>
            </div>
          </Link>
          <Link to="/desktop">
            <div className='catalogo-productos'>
              <img src={desktopImg} className='img-atalogo-productos' />
              <h3>DESKTOP</h3>
            </div>
          </Link>
          <Link to="/audio">
            <div className='catalogo-productos'>
              <img src={audioImg} className='img-atalogo-productos' />
              <h3>AUDIO</h3>
            </div>
          </Link>
          <Link to="/cpu">
            <div className='catalogo-productos'>
              <img src={cpuImg} className='img-atalogo-productos' />
              <h3>CPU</h3>
            </div>
          </Link>
          <Link to="/gpu">
            <div className='catalogo-productos'>
              <img src={gpuImg} className='img-atalogo-productos' />
              <h3>GPU</h3>
            </div>
          </Link>
        </div>
        <div className='contenedor-banner'>
          <div>
            <img src={imgBanner1} className='box1'></img>
          </div>
        </div>
        <div className="contenedor-mas-vendidos">
          <h1 className="titulo-seccion">Lo más vendido</h1>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            className="carrusel-mas-vendidos"
          >
            {productos
              .filter((product) => product.estado === "LO MAS VENDIDO")
              .map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to={`/cpu/${product.id}`} className="slide-producto">
                    <div className="card-producto">
                      <img
                        src={product.img}
                        className="imagen-producto-mas-vendido"
                        alt={product.nombre}
                      />
                      <h3>{product.nombre}</h3>
                      <p className="precio">S/. {product.precio}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default Catalogo;