import '../footer/Footer.css'
import logo from '../../assets/logo.jpg'
import logoMastercard from '../../assets/mastercard.png'
import logoVisa from '../../assets/visa.png'
import logoAmerican from '../../assets/american.png'

const BarraInferior = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="Cloud Shop" className="logo" />
        <p>1777 Harrison St, San Francisco,<br /> CA 94103, USA</p>
        <span>Cloud Shop</span>
      </div>
      <div className="footer-menu">
        <h3>Menú</h3>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Ayuda</a></li>
        </ul>
      </div>
      <div className="footer-contacto">
        <h3>Contáctanos</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">x/Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div className="footer-pagos">
        <h3>Métodos de Pago</h3>
        <div className="pagos">
          <img src={logoMastercard} alt="MasterCard" />
          <img src={logoVisa} alt="Visa" />
          <img src={logoAmerican} alt="American Express" />
        </div>
      </div>
    </div>
  </footer>
);
export const Footer = () => {
  return (
    <BarraInferior />
  )
};