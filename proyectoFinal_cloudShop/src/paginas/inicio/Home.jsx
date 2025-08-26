import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import bannerImg from "../../assets/banner/backgroundBanner.jpg";
import laptop from "../../assets/banner/laptop.webp";
import descuento from "../../assets/banner/descuento.png";
import laptop2 from "../../assets/banner/laptop2.png";
import laptop3 from "../../assets/banner/laptop3.png";
import logo1 from "../../assets/banner/logoPng.png";
import logo2 from "../../assets/banner/logoAsus.png";
import banner from "../../assets/banner/banner2.jpg";
import img1 from "../../assets/banner/img1.png";
import img02 from "../../assets/banner/img2.png";
import img3 from "../../assets/banner/img3.png";
import img4 from "../../assets/banner/img4.png";
import Productos from "./Productos";
import MasProductos from "./MasProductos";

function Home() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      banner: bannerImg,
      extra: (
        <>
          <img className="img2" src={descuento} alt="desc" />
          <div className="laptops">
            <img className="img" src={laptop} alt="laptop" />
            <img className="img1" src={laptop3} alt="laptop" />
            <img className="img3" src={laptop2} alt="laptop" />
          </div>
          <div className="logos">
            <img src={logo1} alt="logoHp" />
            <img src={logo2} alt="logoAsus" />
            <img src={logo1} alt="logoHp" />
          </div>
          <Link to="/laptop">
            <button className="ver">Ver más →</button>
          </Link>
          <div className="descript">
            <div className="prec">
              <p>Laptop Hp Gamer Omen Max 32gb Ram Ssd 16"</p>
              <h2 className="pre1">S/.7,999</h2>
              <h3>S/ 2,399</h3>
            </div>
            <div className="prec">
              <p>Laptop Gamer Asus ROG Strix 64GB 1TB RTX 5090"</p>
              <h2 className="pre1">S/.7,999</h2>
              <h3>S/ 2,399</h3>
            </div>
            <div className="prec">
              <p>Laptop HP Pavilion Gaming 15-dk0001la Core i5-9300H 8GB</p>
              <h2 className="pre1">S/.7,999</h2>
              <h3>S/ 2,399</h3>
            </div>
          </div>
        </>
      ),
    },
    {
      banner: banner,
      extra: (
        <>
          <img className="img2" src={img1} alt="desc" />
          <div className="laptops">
            <img className="img" src={img02} alt="laptop" />
            <img className="img1" src={img3} alt="laptop" />
            <img className="img3" src={img4} alt="laptop" />
          </div>
          <Link to="/desktop">
            <button className="btn1">Ver más →</button>
          </Link>
          <div className="descript">
            <div className="prec">
              <p>Computadora PC Gamer Core I7 Ram32GB, SSD 960GB</p>
              <h2 className="pre">S/.2,899</h2>
              <h3>S/ 3,299</h3>
            </div>
            <div className="prec">
              <p>COMPUTADORA PC i5 16GB 256GB Monitor LED Curvo 23.8</p>
              <h2 className="pre">S/.1,450</h2>
              <h3>S/ 1,350</h3>
            </div>
            <div className="prec">
              <p>Computadora PC Intel Core i7 3.2ghz RAM 16GB 240GB Monitor 27</p>
              <h2 className="pre">S/1,328</h2>
              <h3>S/ 1,238</h3>
            </div>
          </div>
        </>
      ),
    },
  ];

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ✅ Movimiento automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [slides.length]);

  return (
    <>
      <div className="banner-container" style={{ position: "relative" }}>
        <img className="banner" src={slides[index].banner} alt="banner" />

        {slides[index].extra}

        <button
          onClick={anterior}
          style={{
            position: "absolute",
            top: "50%",
            left: "30px",
            fontSize: "30px",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          ◀
        </button>
        <button
          onClick={siguiente}
          style={{
            position: "absolute",
            top: "50%",
            right: "30px",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          ▶
        </button>
      </div>
      <br />
      <br />
      <hr style={{ height: "2px", backgroundColor: "black", border: "none" }} />
      <br />
      <h1>Productos en Oferta</h1>
      <Productos tipo="laptop"/>
      <h1>Más Productos</h1>
      <MasProductos tipo="desktop"/>
    </>
  );
}

export default Home;
