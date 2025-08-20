import { useState } from 'react'
import { Header } from '../../componentes/header/Header'
import { Footer } from '../../componentes/footer/Footer'
import { DetallesEnvio } from './DetalleEnvio' 
import { MetodoPago } from './MetodoPago'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import './Carrito.css'
import { CuponInput } from './CuponInput'

export default function Carrito() {
  const [productos, setProductos] = useState([]);
  const [descuentoAplicado, setDescuentoAplicado] = useState(false);
  const location = useLocation();

  const actualizarCantidad = (id, incremento) => {
    setProductos(productos.map(producto => {
      if (producto.id === id) {
        const nuevaCantidad = producto.cantidad + incremento;
        return nuevaCantidad >= 0 
          ? { ...producto, cantidad: nuevaCantidad }
          : producto;
      }
      return producto;
    }));
  };

  const subtotal = productos.reduce((total, producto) => 
    total + (producto.precio * producto.cantidad), 0);
  
  const envio = "Gratis";
  const descuento = descuentoAplicado ? subtotal * 0.20 : 0; 
  const tarifa = subtotal * 0.05;
  const total = subtotal - descuento + tarifa;

  const renderEstrellas = (calificacion) => {
    return "★".repeat(calificacion) + "☆".repeat(5 - calificacion);
  };

  const CarritoCompra = () => (
    <div className="carrito-container">
      <div className="carrito-productos">
        <h2>Carrito de Compra</h2>
        <div className="productos-lista">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-item">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="producto-info">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <div className="calificacion">
                  {renderEstrellas(producto.calificacion)}
                </div>
                <p className="precio">${producto.precio}</p>
                <div className="cantidad-controles">
                  <button onClick={() => actualizarCantidad(producto.id, -1)}>-</button>
                  <span>{producto.cantidad}</span>
                  <button onClick={() => actualizarCantidad(producto.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="botones-accion">
          <Link to="/carrito/envio" className="btn-siguiente">
            Siguiente
          </Link>
          <button className="btn-cancelar">Cancelar</button>
        </div>
      </div>

      <div className="carrito-resumen">
        <h2>Resumen</h2>
        <CuponInput onDescuentoAplicado={setDescuentoAplicado} />
        <div className="resumen-costos">
          <div className="costo-item">
            <span>Sub-total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {descuentoAplicado && (
            <div className="costo-item descuento">
              <span>Descuento Estudiante (20%)</span>
              <span>-${descuento.toFixed(2)}</span>
            </div>
          )}
          <div className="costo-item">
            <span>Envío</span>
            <span className="envio-gratis">{envio}</span>
          </div>
          <div className="costo-item">
            <span>Tarifa de servicio</span>
            <span>${tarifa.toFixed(2)}</span>
          </div>
          <div className="costo-item total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="proceso-compra">
        <nav className="nav-proceso">
          <Link 
            to="/carrito"
            className={`nav-item ${location.pathname === '/carrito' ? 'activo' : ''}`}
          >
            Carrito de Compra
          </Link>
          <Link 
            to="/carrito/envio"
            className={`nav-item ${location.pathname === '/carrito/envio' ? 'activo' : ''}`}
          >
            Detalles de Envío
          </Link>
          <Link 
            to="/carrito/pago"
            className={`nav-item ${location.pathname === '/carrito/pago' ? 'activo' : ''}`}
          >
            Método de Pago
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<CarritoCompra />} />
          <Route path="/envio" element={<DetallesEnvio />} />
          <Route path="/pago" element={<MetodoPago />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}