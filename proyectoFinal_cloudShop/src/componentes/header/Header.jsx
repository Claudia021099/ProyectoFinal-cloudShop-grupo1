import React from 'react'
import '../header/Header.CSS'
import logo from '../../assets/Logo.jpg'


const Logo = () => (
  <img className='imagen-logo' src={logo} alt="logo" />
);
const Buscador = ({ placeholder = 'Buscar...' }) => (
  <div className='barra-centro'>
    <input type="text" placeholder={placeholder} className="search" />
  </div>
);
import { Link } from "react-router-dom";

const BarraLinks = () => (
  <ul className='ventanas'>
    <Link to="/">Inicio</Link>
    <span>|</span>
    <Link to="/catalogo">Catálogo</Link>
    <span>|</span>
    <Link to="/nosotros">Nosotros</Link>
    <span>|</span>
    <Link to="/ayuda">Ayuda</Link>
  </ul>
);


export default BarraLinks;

const Carrito = () => (

  <button className='boton-carrito'>🛒carrito</button>
);
export const Header = () => {
  return (
    <div className='barra-navegacion'>
      <nav>
        <Logo />
        <Buscador />
        <BarraLinks />
        <Carrito />
      </nav>
    </div>
  )
}
