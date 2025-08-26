import { useState } from 'react';
import { DetallesEnvio } from './DetalleEnvio';
import { MetodoPago } from './MetodoPago';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './Carrito.css';
import { CuponInput } from './CuponInput';

export default function Carrito({ cartItems, removerCarrito }) {
  const [descuentoAplicado, setDescuentoAplicado] = useState(false);
  const [items, setItems] = useState(cartItems);
  const location = useLocation();
  const navigate = useNavigate();

  const actualizarCantidad = (id, incremento) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const nuevaCantidad = (item.cantidad || 1) + incremento;
          // Evitar cantidades negativas
          return {
            ...item,
            cantidad: nuevaCantidad > 0 ? nuevaCantidad : 1,
          };
        }
        return item;
      })
    );
  };

  const subtotal = items.reduce(
    (total, item) => total + item.precio * (item.cantidad || 1),
    0
  );

  const envio = 'Gratis';
  const descuento = descuentoAplicado ? subtotal * 0.2 : 0;
  const tarifa = subtotal * 0.05;
  const total = subtotal - descuento + tarifa;

  const renderEstrellas = (calificacion) => {
    return '★'.repeat(calificacion) + '☆'.repeat(5 - calificacion);
  };

  const handleRemoverItem = (id) => {
    // Actualizar estado local
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    // Actualizar estado global
    removerCarrito(id);
  };

  const handleCancelar = () => {
    navigate('/catalogo');
  };

  const CarritoCompra = () => (
    <div className="carrito-container">
      <div className="carrito-productos">
        <h2>Carrito de Compra</h2>
        {items.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          items.map((item, index) => (
            <div key={`${item.id}-${index}`} className="carrito-item">
              <img
                className="carrito-item-img"
                src={item.imageUrl || item.img}
                alt={item.titulo || item.nombre}
              />
              <div className="carrito-contenedor">
                <h4>{item.titulo || item.nombre}</h4>
                <p>${item.precio.toFixed(2)}</p>
                <div className="cantidad-controles">
                  <button onClick={() => actualizarCantidad(item.id, -1)}>
                    -
                  </button>
                  <span>{item.cantidad || 1}</span>
                  <button onClick={() => actualizarCantidad(item.id, 1)}>
                    +
                  </button>
                </div>
                <button
                  className="remover-carrito"
                  onClick={() => handleRemoverItem(item.id)} // Cambiar aquí
                >
                  ELIMINAR
                </button>
              </div>
            </div>
          ))
        )}
        <div className="botones-accion">
          <Link to="/carrito/envio" className="btn-siguiente">
            Siguiente
          </Link>
          <button className="btn-cancelar" onClick={handleCancelar}>
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
    <div className="proceso-compra">
      <nav className="nav-proceso">
        <Link
          to="/carrito"
          className={`nav-item ${
            location.pathname === '/carrito' ? 'activo' : ''
          }`}
        >
          Carrito de Compra
        </Link>
        <Link
          to="/carrito/envio"
          className={`nav-item ${
            location.pathname === '/carrito/envio' ? 'activo' : ''
          }`}
        >
          Detalles de Envío
        </Link>
        <Link
          to="/carrito/pago"
          className={`nav-item ${
            location.pathname === '/carrito/pago' ? 'activo' : ''
          }`}
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
  );
}