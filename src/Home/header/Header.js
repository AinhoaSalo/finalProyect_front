import './Header.css';
import {NavLink , useLocation} from 'react-router-dom'

function Header() {
  return(
    <>
      <header className="headerDesktopMaxPixel">
        <div className="titleHomeDesktopMaxPixel">
          <h1 className='titleSoonHomeHeader'>Plan Your Trip</h1>
          <nav className='navLinkHeader'>
            <NavLink className="linkHeader" to="/inicio">Inicio</NavLink>
            <NavLink className="linkHeader" to="/italia">Italia</NavLink>
            <NavLink className="linkHeader" to="/eeuu">EEUU</NavLink>
            <NavLink className="linkHeader" to="/listascreadas">Planning</NavLink>
            <NavLink className="linkHeader" to="/registro">Registro</NavLink>
            <div className={"animation start-" + (useLocation().pathname).substring(1)}></div>
          </nav>
        </div>
      </header>
    </>
  )
    
}

export default  Header