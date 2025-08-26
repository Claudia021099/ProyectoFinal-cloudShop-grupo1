import '../ayuda/Ayuda.css'
import { useState } from "react";
import flechaArriba from '../../assets/flechaArriba.png'
import flechaAbajo from '../../assets/flechaAbajo.png'

function Pregunta({ titulo, pasos }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="caja-ayuda">
      <div className="encabezado-ayuda" onClick={() => setAbierto(!abierto)}>
        <h2 className="titulo-ayuda">{titulo}</h2>
        <img
          src={abierto ? flechaArriba : flechaAbajo}
          alt="icono flecha"
          className="icono-ayuda"
        />
      </div>

      {abierto && (
        <div className="contenido-ayuda">
          <ul>
            {pasos.map((paso, i) => (
              <li key={i}>{paso}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
function Ayuda() {
  const preguntas = [
    {
      titulo: "¿Cómo crear una cuenta?",
      pasos: [
        "Ingresa a la opción Registrarse en la parte superior derecha.",
        "Completa tus datos personales y correo electrónico.",
        "Confirma tu correo para activar tu cuenta."
      ]
    },
    {
      titulo: "¿Cómo hacer una compra?",
      pasos: [
        "¿Cómo hacer una compra?",
        "Selecciona el producto que deseas.",
        "Haz clic en Agregar al carrito."
      ]
    },
    {
      titulo: "¿Qué métodos de pago aceptamos?",
      pasos: [
        "Tarjetas de débito y crédito (Visa, Mastercard, Amex).",
        "Pagos con billeteras digitales (Yape, Plin, PayPal).",
        "Transferencias bancarias (selecciona la opción en checkout)."
      ]
    },
    {
      titulo: "¿Cuánto tarda el envío?",
      pasos: [
        "Envíos dentro de Lima: 24 a 48 horas hábiles.",
        "Envíos nacionales: 3 a 5 días hábiles.",
        "Podrás rastrear tu pedido desde tu cuenta."
      ]
    },
    {
      titulo: "¿Cómo rastrear mi pedido?",
      pasos: [
        "Ingresa a tu perfil y selecciona Mis pedidos.",
        "Haz clic en el pedido para ver el estado del envío.",
        "También recibirás actualizaciones por correo electrónico."
      ]
    },
    {
      titulo: "¿Qué garantía tienen los productos?",
      pasos: [
        "Todos los productos incluyen garantía de fabricante.",
        "La duración varía entre 12 y 24 meses según el producto.",
        "Puedes solicitar garantía desde la sección Soporte Técnico."
      ]
    },
    {
      titulo: "¿Cómo hacer un cambio o devolución?",
      pasos: [
        "El plazo para cambios/devoluciones es de 7 días hábiles.",
        "El producto debe estar en su empaque original.",
        "Contáctanos a través de servicio al cliente para coordinar."
      ]
    },
    {
      titulo: "¿Cómo contactar soporte técnico?",
      pasos: [
        "Envíanos un correo a soporte@cloud.shop",
        "O llama al número de atención: 0800-123-456.",
        "También puedes usar el chat en vivo en la web."
      ]
    },
    {
      titulo: "¿Qué hago si el producto llega dañado?",
      pasos: [
        "Toma fotos del producto y del empaque.",
        "Entra a tu cuenta y abre un caso de reclamo.",
        "Nuestro equipo validará la incidencia en menos de 48 horas."
      ]
    },
    {
      titulo: "¿Cómo aplicar un cupón de descuento?",
      pasos: [
        "Agrega los productos al carrito.",
        "En la pantalla de pago, ingresa tu código en el campo “Cupón”.",
        "El descuento se aplicará automáticamente al total."
      ]
    }
  ];

  return (
    <div className="contenedor-ayuda">
      <h1>Centro de ayuda</h1>
      {preguntas.map((p, i) => (
        <Pregunta key={i} titulo={p.titulo} pasos={p.pasos} />
      ))}
    </div>
  );
}

export default Ayuda;
