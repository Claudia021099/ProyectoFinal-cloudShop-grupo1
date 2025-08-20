import React from 'react'
import { Link } from 'react-router-dom'
import './Carrito.css'

export const DetallesEnvio = () => {
  return (
    <div className="envio-container">
      <h3>Detalles de Envío</h3>
      <div className="botones-accion">
        <Link to="/carrito/pago" className="btn-siguiente">
          Siguiente
        </Link>
        <Link to="/carrito" className="btn-cancelar">
          Volver
        </Link>
      </div>
    </div>
  )
}