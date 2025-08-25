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
  const [cartItems, setCartItems] = useState([]);

  function handleClick() {
    setCount(count + 1);
  }

  const agregarCarrito = (producto) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === producto.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      }
      return [...prevItems, { ...producto, cantidad: 1 }];
    });
  };

  const removerCarrito = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, incremento) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = (item.cantidad || 1) + incremento;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  // 🔑 logout limpia todo
  const logout = () => {
    setIsLoggedIn(false);
    setCartItems([]); // 🛒 limpia carrito
    setCount(0);      // 🔄 reinicia contador manual
    localStorage.removeItem("isLoggedIn"); // opcional
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <>
      <Header
        count={cartItems.reduce((acc, item) => acc + (item.cantidad || 1), 0)}
          // ✅ pasamos logout al Header
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/laptop" element={<CatalogoLaptops />} />
        <Route
          path="/laptop/:productId"
          element={
            <ProductoDescripcion
              onAddToCart={handleClick}
              isLoggedIn={isLoggedIn}
              agregarCarrito={agregarCarrito}
            />
          }
        />
        <Route path="/desktop" element={<CatalogoDesktops />} />
        <Route
          path="/desktop/:productId"
          element={
            <ProductoDescripcion
              onAddToCart={handleClick}
              isLoggedIn={isLoggedIn}
              agregarCarrito={agregarCarrito}
            />
          }
        />
        <Route path="/audio" element={<CatalogoAudios />} />
        <Route
          path="/audio/:productId"
          element={
            <ProductoDescripcion
              onAddToCart={handleClick}
              isLoggedIn={isLoggedIn}
              agregarCarrito={agregarCarrito}
            />
          }
        />
        <Route path="/cpu" element={<CatalogoCpus />} />
        <Route
          path="/cpu/:productId"
          element={
            <ProductoDescripcion
              onAddToCart={handleClick}
              isLoggedIn={isLoggedIn}
              agregarCarrito={agregarCarrito}
            />
          }
        />
        <Route path="/gpu" element={<CatalogoGpus />} />
        <Route
          path="/gpu/:productId"
          element={
            <ProductoDescripcion
              onAddToCart={handleClick}
              isLoggedIn={isLoggedIn}
              agregarCarrito={agregarCarrito}
            />
          }
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route
          path="/carrito"
          element={
            <Carrito
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              cartItems={cartItems}
              removerCarrito={removerCarrito}
              actualizarCantidad={actualizarCantidad}
            />
          }
        />
        <Route
          path="/carrito/*"
          element={
            <Carrito
              isLoggedIn={isLoggedIn}
              cartItems={cartItems}
              removerCarrito={removerCarrito}
              actualizarCantidad={actualizarCantidad}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setCount={setCount}
              onLogout={logout} 
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}


export default App