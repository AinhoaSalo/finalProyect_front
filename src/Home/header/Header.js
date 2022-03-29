import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return(
    <>
      <header className="headerMobile">
        <div className="titleHomeMobile">
          <h1 className='titleSoonHomeHeader'>Plan Your Trip</h1>
          <nav>
            <Link className='linkHeader' to="/">Inicio</Link>
            <Link className='linkHeader' to="#">Europa</Link>
            <Link className='linkHeader' to="#">EEUU</Link>
            <Link className='linkHeader' to="/planearviaje">Planning</Link>
            <Link className='linkHeader' to="/registro">Registro</Link>
            <div className="animation start-home"></div> {/* mirar start-home */}
          </nav>
        </div>
      </header>
      <header className="headerDesktop">
        <div className="titleHomeDesktop">
          <h1 className='titleSoonHomeHeader'>Plan Your Trip</h1>
          <nav className='.navLinkHeader'>
            <Link className='linkHeader' to="/">Inicio</Link>
            <Link className='linkHeader' to="#">Europa</Link>
            <Link className='linkHeader' to="#">EEUU</Link>
            <Link className='linkHeader' to="/planearviaje">Planning</Link>
            <Link className='linkHeader' to="/registro">Registro</Link>
            <div className="animation start-home"></div>
          </nav>
        </div>
      </header>
      <header className="headerDesktopMaxPixel">
        <div className="titleHomeDesktopMaxPixel">
          <h1 className='titleSoonHomeHeader'>Plan Your Trip</h1>
          <nav className='navLinkHeader'>
            <Link className='linkHeader' to="/">Inicio</Link>
            <Link className='linkHeader' to="#">Europa</Link>
            <Link className='linkHeader' to="#">EEUU</Link>
            <Link className='linkHeader' to="/planearviaje">Planning</Link>
            <Link className='linkHeader' to="/registro">Registro</Link>
            <div className="animation start-home"></div>
          </nav>
        </div>
      </header>
    </>
  )
    
}

export default  Header