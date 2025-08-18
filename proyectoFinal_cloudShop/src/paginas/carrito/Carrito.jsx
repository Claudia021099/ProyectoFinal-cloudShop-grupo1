import { Header } from '../../componentes/header/Header'
import { Footer } from '../../componentes/footer/Footer'
import './Carrito.css'

export default function Carrito() {
  return (
        <>
          <Header />
          <div className='caja-carrito'>
            <h1>carrito</h1>
          </div>
          <Footer />
        </>
  )
}