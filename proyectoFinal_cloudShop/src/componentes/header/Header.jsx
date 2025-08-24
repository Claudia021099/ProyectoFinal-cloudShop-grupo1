import React from 'react'
import '../header/Header.css'
import logo from '../../assets/Logo.jpg'
import { Link } from "react-router-dom";
import iconLogin from '../../assets/loginicon.png'

const Logo = () => (
  <img className='imagen-logo' src={logo} alt="logo" />
);

const Buscador = ({ placeholder = 'Buscar...' }) => (
  <div className='barra-centro'>
    <input type="text" placeholder={placeholder} className="search" />
  </div>
);

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

const Carrito = ({ count }) => (
  <Link to="/carrito">
    <button className='boton-carrito'>
      🛒 Carrito {count > 0 && <span>{count}</span>}
    </button>
  </Link>
);

const Login = () => (
  <Link to="/login">
    <button className='boton-login'><img src={iconLogin} alt="login" className="icono-login" /></button>
  </Link>
);

export const Header = ({ count }) => {
  return (
    <div className='barra-navegacion'>
      <nav>
        <Logo />
        <Buscador />
        <BarraLinks />
        <Carrito count={count}/>
        <Login />
      </nav>
    </div>
  )
}

export default Header;
