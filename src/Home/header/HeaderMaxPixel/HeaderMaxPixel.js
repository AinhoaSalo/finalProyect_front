import './HeaderMax.css';
import {NavLink , useLocation} from 'react-router-dom'
import logoSmall from "../img/logoSmall.png"

function HeaderMaxPixel() {
  return(
    <>
      <header className="headerDesktopMaxPixel">
        <div className="titleHomeDesktopMaxPixel">
          <div className='imgAndTitle'>
            <NavLink to="/inicio"><img className="linkHeaderImg" src={logoSmall} alt="mundo"/></NavLink><h1 className='titleH1Header'>Plan Your Trip</h1>
          </div>
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

export default  HeaderMaxPixel;