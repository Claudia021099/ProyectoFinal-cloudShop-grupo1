import './App.css'
import { Routes, Route } from "react-router-dom"

import Home from './paginas/inicio/Home'
import Catalogo from './paginas/catalogo/Catalogo'
import Ayuda from './paginas/ayuda/Ayuda'
import Nosotros from './paginas/nosotros/Nosotros'
import Carrito from './paginas/carrito/Carrito'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import CatalogoLaptops from './paginas/catalogo/CatalogoLaptops';
import CatalogoDesktops from './paginas/catalogo/CatalogoDesktops'
import CatalogoAudios from './paginas/catalogo/CatalogoAudios'
import CatalogoCpus from './paginas/catalogo/CatalogoCpus'
import CatalogoGpus from './paginas/catalogo/CatalogoGpus'
import ProductoDescripcion from './paginas/catalogo/ProductoDescripcion';
import Login from './paginas/login/Login'
import { useEffect, useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);
  return (
    <>
      <Header count={count} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/laptop" element={<CatalogoLaptops />} />
        <Route
          path="/laptop/:productId"
          element={<ProductoDescripcion onAddToCart={handleClick} />}
        />
        <Route path="/desktop" element={<CatalogoDesktops />} />
        <Route
          path="/desktop/:productId"
          element={<ProductoDescripcion onAddToCart={handleClick} />}
        />
        <Route path="/audio" element={<CatalogoAudios />} />
        <Route
          path="/audio/:productId"
          element={<ProductoDescripcion onAddToCart={handleClick} />}
        />
        <Route path="/cpu" element={<CatalogoCpus />} />
        <Route
          path="/cpu/:productId"
          element={<ProductoDescripcion onAddToCart={handleClick} />}
        />
        <Route path="/gpu" element={<CatalogoGpus />} />
        <Route
          path="/gpu/:productId"
          element={<ProductoDescripcion onAddToCart={handleClick} />}
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/carrito" element={<Carrito isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/carrito/*" element={<Carrito isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCount={setCount}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App