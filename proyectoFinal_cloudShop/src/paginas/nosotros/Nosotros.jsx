import '../nosotros/Nosotros.css'
import banner2 from '../../assets/homeimg/banner2.jpg'

export default function Nosotros() {
  return (
    <>
      <section className="seccion-nube">
        <article className="tarjeta-nube">
          <header className="cabecera-nube">
            <div className="marca-nube">
              <h1>Cloud Shop</h1>
            </div>
          </header>
          <div>
            <img src={banner2} alt="img" className='img-banner2' />
          </div>
          <div className="cuerpo-nube">
            <h2>Tu tienda electrónica de confianza</h2>
            <p>
              <strong>Cloud Shop</strong> es una empresa moderna y confiable
              especializada en la <strong>venta de productos electrónicos a través del e-commerce</strong>,
              creada con la visión de acercar la tecnología de última generación a todos
              los usuarios de manera rápida, sencilla y segura. Nuestro objetivo
              principal es brindar una <strong>experiencia de compra en línea práctica, confiable y accesible</strong>.
            </p>

            <h3>¿Qué ofrecemos?</h3>
            <ul className="lista-nube">
              <li>Computadoras portátiles y de escritorio de alto rendimiento.</li>
              <li>Smartphones y tablets de las marcas más reconocidas.</li>
              <li>Accesorios electrónicos y periféricos.</li>
              <li>Componentes de hardware para mejorar o armar equipos.</li>
              <li>Gadgets inteligentes para hogar y oficina.</li>
            </ul>

            <h3>Compra fácil, segura y rápida</h3>
            <p>
              Nuestra plataforma es <em>intuitiva</em>, con <strong>pagos seguros</strong> y <strong>envíos rápidos</strong>.
              Acompañamos a nuestros clientes en todo el proceso, con soporte y asesoría pre y postventa.
            </p>

            <h3>Nuestra misión</h3>
            <p>
              <strong>Cloud Shop</strong> se posiciona como tu aliado tecnológico para
              mantenerte conectado, productivo e innovador, democratizando el acceso a
              la tecnología de vanguardia.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
