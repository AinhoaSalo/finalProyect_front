import './HeaderMax.css';
import {NavLink , useLocation} from 'react-router-dom'
import logoSmall from "../img/logoSmall.png"

function HeaderMaxPixel() {
  return(
    <>
      <div className="headerDesktopMaxPixel">
        <div className="titleHomeDesktopMaxPixel">
          <div className='imgAndTitle'>
            <NavLink to="/inicio"><img className="linkHeaderImg" src={logoSmall} alt="mundo"/></NavLink><h1 className='titleH1Header'>Plan Your Trip</h1>
          </div>
          <nav>
            <ul className='navLinkHeader'>
              <li className="linkHeader" ><NavLink className="link" to="/inicio">Inicio</NavLink></li>
              <li className="linkHeader"><NavLink className="link" to="/italia">Italia</NavLink></li>
              <li className="linkHeader"><NavLink className="link" to="/eeuu">EEUU</NavLink></li>
              <li className="linkHeader"><NavLink className="link" to="/listascreadas">Planning</NavLink></li>
              <li className="linkHeader"><NavLink className="link" to="/registro">Registro</NavLink></li>
              <li className={"animation start-" + (useLocation().pathname).substring(1)}></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
    
}

export default  HeaderMaxPixel;