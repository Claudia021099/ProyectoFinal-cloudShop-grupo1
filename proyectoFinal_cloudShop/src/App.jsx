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




function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/laptop" element={<CatalogoLaptops />} />
        <Route path="/laptop/:productId" element={<ProductoDescripcion />} />
        <Route path="/desktop" element={<CatalogoDesktops />} />
        <Route path="/desktop/:productId" element={<ProductoDescripcion />} />
        <Route path="/audio" element={<CatalogoAudios />} />
        <Route path="/audio/:productId" element={<ProductoDescripcion />} />
        <Route path="/cpu" element={<CatalogoCpus />} />
        <Route path="/cpu/:productId" element={<ProductoDescripcion />} />
        <Route path="/gpu" element={<CatalogoGpus />} />
        <Route path="/gpu/:productId" element={<ProductoDescripcion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/carrito/*" element={<Carrito />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
