import React from 'react'
import { Link } from 'react-router-dom'
import './Carrito.css'

export const MetodoPago = () => {
  return (
    <div className="pago-container">
      <h3>Método de Pago</h3>
      <div className="botones-accion">
        <button className="btn-siguiente">
          Finalizar Compra
        </button>
        <Link to="/carrito/envio" className="btn-cancelar">
          Volver
        </Link>
      </div>
    </div>
  )
}