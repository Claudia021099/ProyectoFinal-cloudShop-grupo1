
import { Link } from 'react-router-dom';
import '../catalogo/Catalogo.css'
import laptopsImg from '../../assets/catalogo/laptops.jpg';
import desktopImg from '../../assets/catalogo/desktop.png';
import audioImg from '../../assets/catalogo/headphones.png';
import cpuImg from '../../assets/catalogo/cpus.jpg';
import gpuImg from '../../assets/catalogo/gpus.jpg';
import imgBanner1 from '../../assets/homeImg/banner1.webp';
import imgBanner3 from '../../assets/homeImg/banner3.png';

function Catalogo() {
  return (
    <>
      <div className="caja-catalogo">
        <div className='contenedor-catalogo'>
          <Link to="/laptop">
            <div className='catalogo-productos'>
              <img src={laptopsImg} className='img-atalogo-productos' />
              <h3>LAPTOPS</h3>
            </div>
          </Link>
          <Link to="/desktop">
            <div className='catalogo-productos'>
              <img src={desktopImg} className='img-atalogo-productos' />
              <h3>DESKTOP</h3>
            </div>
          </Link>
          <Link to="/audio">
            <div className='catalogo-productos'>
              <img src={audioImg} className='img-atalogo-productos' />
              <h3>AUDIO</h3>
            </div>
          </Link>
          <Link to="/cpu">
            <div className='catalogo-productos'>
              <img src={cpuImg} className='img-atalogo-productos' />
              <h3>CPU</h3>
            </div>
          </Link>
          <Link to="/gpu">
            <div className='catalogo-productos'>
              <img src={gpuImg} className='img-atalogo-productos' />
              <h3>GPU</h3>
            </div>
          </Link>
        </div>
        <div className='contenedor-banner'>
          <div className='columna-izquierda'>
            <img src={imgBanner1} className='box1'></img>
            <img src={imgBanner1} className='box2'></img>
          </div>
          <div className='columna-derecha'>
            <img src={imgBanner3} className='box3'></img>
          </div>
        </div>
      </div>
    </>
  )
}
export default Catalogo;