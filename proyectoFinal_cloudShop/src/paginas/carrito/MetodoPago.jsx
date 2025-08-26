import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Carrito.css'
import btnMarc from '../../assets/carrito/btn-marcado.png'
import btnDesmarc from '../../assets/carrito/btn-desmarcado.png'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import payPal from '../../assets/carrito/payPal.png'
import payPal2 from '../../assets/carrito/payPal2.png'


const schema = yup.object().shape({
  numTarjeta: yup.string().required('Número de tarjeta obligatorio.')
    .matches(/^[0-9\s-]*$/, 'Solo números, espacios o guiones.')
    .test('longitudNumeroTarjeta', 'Número inválido', val => {
      const n = val.replace(/\s|-/g, '');
      return n.length >= 15 && n.length <= 16;
    }
  ),

  expiraTarjeta: yup.string().required('MM/YY obligatorio')
    .matches(/^\d{2}\/\d{2}$/, 'Formato MM/YY')
    .test('validarMes', 'Mes inválido', val => {
      const m = val.split("/");
      return Number(m[0]) >= 1 && Number(m[0]) <= 12;
    }
  ),

  cvv: yup.string().required('CVV obligatorio')
    .matches(/^\d{3,4}$/, 'CVV inválido'
  ),

  titular: yup.string().required('Nombre del titular obligatorio')
    .min(2, 'Nombre muy corto')
    .max(25, 'Nombre muy largo'
  )  
});

export const MetodoPago = () => {
  const [seleccion, setSeleccion] = useState("opcion1");
  const {register, handleSubmit, reset, formState: {errors}}= useForm({resolver: yupResolver(schema)});
  const onData = (data) => {
    console.log(data);
    reset();
  }
  const [mostrarPaypal, setMostrarPaypal] = useState(false);
  return (
    <>
      <div className = "pago-container">
        <div className = "metodosPago" >
          <h2>Métodos de Pago</h2>
          <div className = "botonesSeleccion">
            <div className = "tarjetaCredito">
              <img className = {seleccion === "opcion1" ? "btn-activo" : "btn-inactivo"} src = {seleccion === "opcion1" ? btnMarc : btnDesmarc} onClick = {() => setSeleccion("opcion1")} />
              <p style = {{marginTop: "-70px", marginLeft: "86px"}}><b> Tarjeta de Crédito </b></p>            
              <p style = {{marginLeft: "86px", opacity: "0.6"}}>Tu método de pago predeterminado</p>
              <form onSubmit = {handleSubmit(onData)} id = "datosTarjetaxd">
                <div style = {{display: "flex", marginBottom: "-20px"}} >
                  <div>
                    <input className = "campo1" {...register('numTarjeta')} placeholder = "  0000 0000 0000 0000     💳" />
                    <p style = {{color: 'red', marginLeft: "39px", marginTop: "5px"}}>{errors.numTarjeta?.message}</p>
                  </div>
                  <div>
                    <input className = "campo2" {...register('expiraTarjeta')} placeholder = "  MM/YY" />
                    <p style = {{color: 'red', marginLeft: "43px", marginTop: "5px"}}>{errors.expiraTarjeta?.message}</p>
                  </div>
                  <div>
                    <input className = "campo3" {...register('cvv')} placeholder = "  CVV" />
                    <p style = {{color: 'red', marginLeft: "27.5px", marginTop: "5px"}}>{errors.cvv?.message}</p>
                  </div>
                </div>
                <input className = "campo4" {...register('titular')} placeholder = "  Nombre del titular de la tarjeta" />
                <p style = {{color: 'red', marginTop: "5px", marginLeft: "39px"}}>{errors.titular?.message}</p>
              </form>
            </div>
            <div className = "paypal">
              <img className = {seleccion === "opcion2" ? "btn-activo" : "btn-inactivo"} src = {seleccion === "opcion2" ? btnMarc : btnDesmarc} onClick = {() => setSeleccion("opcion2")} />
              <div>
                <p style = {{marginTop: "28px", marginLeft: "26px"}}><b> Paypal </b></p> 
                <p style = {{marginLeft: "26px", opacity: "0.6"}}>Pago por paypal</p>
              </div>
              <img  src = {payPal} className = {seleccion === "opcion2" ? "onPaypal" : "offPaypal"}/>
            </div>
          </div>
          <div className="botones-accion">
            <button className="btn-siguiente" form ={seleccion === "opcion1" ? "datosTarjetaxd" : ""} onClick = {() => {if (seleccion === "opcion2") {setMostrarPaypal(true)}}} >
              Finalizar Compra
            </button>
            <Link to="/carrito/envio" className="btn-cancelar">
              Volver
            </Link>
          </div>
        </div>
        <div className = "carrito-resumen">
          <h2>Resumen</h2>
        </div>
      </div>
      <div id = "ingresarPaypal" style = {{display: mostrarPaypal ? "block" : "none"}}>
        <div className = "contenidoPaypal">
          <div className = "cabezeraPaypal">
            <img src = {payPal2}/>
            <span class="close" onClick={() => setMostrarPaypal(false)}>⊗</span>
          </div>
          <div className =  "cuerpoPaypal">
            <form>
              <input className = "nombrePaypal" placeholder = "  nombre@mail.com"></input>
              <br />
              <input className = "contraPaypal" placeholder = "  ************" ></input>
              <br />
              <button>Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}