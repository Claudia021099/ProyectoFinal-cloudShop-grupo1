import './App.css'
import { Routes, Route } from "react-router-dom"

import Home from './paginas/inicio/Home'
import Catalogo from './paginas/catalogo/Catalogo'
import Ayuda from './paginas/ayuda/Ayuda'
import Nosotros from './paginas/nosotros/Nosotros'
import Carrito from './paginas/carrito/Carrito'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />}/>        
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/ayuda" element={<Ayuda />}/>
        <Route path="/carrito" element={<Carrito />}/>
      </Routes>
    </>
  )
}

export default App
