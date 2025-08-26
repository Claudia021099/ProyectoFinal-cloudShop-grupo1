import { useState } from 'react';
import { DetallesEnvio } from './DetalleEnvio';
import { MetodoPago } from './MetodoPago';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CuponInput } from './CuponInput';
import './Carrito.css';

export default function Carrito({ cartItems, removerCarrito }) {
  const [descuentoAplicado, setDescuentoAplicado] = useState(false);
  const [items, setItems] = useState(cartItems);
  const location = useLocation();
  const navigate = useNavigate();

  const actualizarCantidad = (id, incremento) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {
          ...item,
          cantidad: Math.max((item.cantidad || 1) + incremento, 1)
        } : item
      )
    );
  };

  const subtotal = items.reduce((total, item) => 
    total + item.precio * (item.cantidad || 1), 0);
  const descuento = descuentoAplicado ? subtotal * 0.2 : 0;
  const tarifa = subtotal * 0.05;
  const total = subtotal - descuento + tarifa;

  const handleEliminar = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    removerCarrito(id);
  };

  const CarritoCompra = () => (
    <div className="carrito-container">
      <div className="carrito-productos">
        <h2>Carrito de Compra</h2>
        {items.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="carrito-item">
              <img
                className="carrito-item-img"
                src={item.img}
                alt={item.nombre}
              />
              <div className="carrito-contenedor">
                <h4>{item.nombre}</h4>
                <p>S/{item.precio.toFixed(2)}</p>
                <div className="cantidad-controles">
                  <button onClick={() => actualizarCantidad(item.id, -1)}>-</button>
                  <span>{item.cantidad || 1}</span>
                  <button onClick={() => actualizarCantidad(item.id, +1)}>+</button>
                </div>
                <button
                  className="remover-carrito"
                  onClick={() => handleEliminar(item.id)} 
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          ))
        )}
        <div className="botones-accion">
          <Link to="/carrito/envio" className="btn-siguiente">Siguiente</Link>
          <button className="btn-cancelar" onClick={() => navigate('/catalogo')}>
            Cancelar
          </button>
        </div>
      </div>

      <div className="carrito-resumen">
        <h2>Resumen</h2>
        <CuponInput onDescuentoAplicado={setDescuentoAplicado} />
        <div className="resumen-costos">
          <div className="costo-item">
            <span>Sub-total</span>
            <span>S/. {subtotal.toFixed(2)}</span>
          </div>
          {descuentoAplicado && (
            <div className="costo-item descuento">
              <span>Descuento Estudiante (20%)</span>
              <span>-S/. {descuento.toFixed(2)}</span>
            </div>
          )}
          <div className="costo-item">
            <span>Envío</span>
            <span className="envio-gratis">Gratis</span>
          </div>
          <div className="costo-item">
            <span>Tarifa de servicio</span>
            <span>S/. {tarifa.toFixed(2)}</span>
          </div>
          <div className="costo-item total"> 
            <span>Total</span>
            <span>S/. {total.toFixed(2)}</span> 
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="proceso-compra">
      <nav className="nav-proceso">
        <Link to="/carrito" className={`nav-item ${location.pathname === '/carrito' ? 'activo' : ''}`}>
          Carrito de Compra
        </Link>
        <Link to="/carrito/envio" className={`nav-item ${location.pathname === '/carrito/envio' ? 'activo' : ''}`}>
          Detalles de Envío
        </Link>
        <Link to="/carrito/pago" className={`nav-item ${location.pathname === '/carrito/pago' ? 'activo' : ''}`}>
          Método de Pago
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<CarritoCompra />} />
        <Route path="/envio" element={<DetallesEnvio />} />
        <Route path="/pago" element={<MetodoPago />} />
      </Routes>
    </div>
  );
}