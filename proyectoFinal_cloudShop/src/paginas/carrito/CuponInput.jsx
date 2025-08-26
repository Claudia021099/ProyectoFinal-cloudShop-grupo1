import React, { useState } from 'react';

export const CuponInput = ({ onDescuentoAplicado }) => {
  const [cupon, setCupon] = useState('');
  const [mensajeCupon, setMensajeCupon] = useState('');

  const validarCupon = () => {
    const esValido = /^I20\d{7}$/.test(cupon);
    setMensajeCupon(esValido 
      ? '¡Descuento de estudiante aplicado!'
      : 'Código de estudiante inválido'
    );
    onDescuentoAplicado(esValido);
  };

  const handleChange = (e) => {
    const valor = e.target.value
      .toUpperCase()  //mayusculas
      .replace(/[^A-Z0-9]/g, '') //solo letras y numeros
      .slice(0, 10); //maximo 10 caracteres
    setCupon(valor);
    setMensajeCupon('');
  };

  return (
    <>
      <div className="cupon">
        <input 
          type="text" 
          placeholder="Código de estudiante (I20...)"
          value={cupon}
          onChange={handleChange}
        />
        <button 
          onClick={validarCupon}
          disabled={cupon.length !== 10}
        >
          Aplicar
        </button>
      </div>
      {mensajeCupon && (
        <div className={`mensaje-cupon ${mensajeCupon.includes('aplicado') ? 'exito' : 'error'}`}>
          {mensajeCupon}
        </div>
      )}
    </>
  );
};