
import { Link } from 'react-router-dom';
import '../catalogo/Catalogo.css'
import laptopsImg from '../../assets/catalogo/laptops.jpg';
import desktopImg from '../../assets/catalogo/desktop.png';
import audioImg from '../../assets/catalogo/headphones.png';
import cpuImg from '../../assets/catalogo/cpus.jpg';
import gpuImg from '../../assets/catalogo/gpus.jpg';

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
      </div>
    </>
  )
}
export default Catalogo;