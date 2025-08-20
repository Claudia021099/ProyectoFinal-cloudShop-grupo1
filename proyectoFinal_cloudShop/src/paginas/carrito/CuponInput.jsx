import React, { useState } from 'react'

export const CuponInput = ({ onDescuentoAplicado }) => {
  const [cupon, setCupon] = useState("");
  const [mensajeCupon, setMensajeCupon] = useState("");

  const validarCupon = () => {
    const codigoRegex = /^I20\d{7}$/; 
    
    if (cupon.length !== 10) {
      setMensajeCupon("El código debe tener 10 caracteres");
      onDescuentoAplicado(false);
      return;
    } 
    
    if (codigoRegex.test(cupon)) {
      setMensajeCupon("¡Descuento de estudiante aplicado!");
      onDescuentoAplicado(true);
    } else {
      setMensajeCupon("Código de estudiante inválido");
      onDescuentoAplicado(false);
    }
  };

  const handleChange = (e) => {
    const valor = e.target.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, 10);
    setCupon(valor);
    setMensajeCupon("");
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