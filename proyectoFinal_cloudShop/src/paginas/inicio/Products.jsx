import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import productos from "../../data/productos";
import "./Productos.css";

function Products({ tipo }) {
  const productosFiltrados = productos.slice(82, 90);

  const irAlProducto = (id) => {
    window.location.href = `/${tipo}/${id}`;
  };

  return (
    <div className="carrusel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="swiper-productos"
      >
        {productosFiltrados.map((p) => (
          <SwiperSlide key={p.id}>
            <div
              className="producto-card"
              onClick={() => irAlProducto(p.id)}
              style={{ cursor: "pointer" }}
            >
              <img src={p.img} alt={p.nombre} className="producto-img" />
              <div className="producto-nombre">{p.nombre}</div>
              <div className="descripcion">{p.descripcion}</div>
              <div className="precio">${p.precio}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev">❮</div>
      <div className="custom-next">❯</div>
    </div>
  );
}

export default Products;
