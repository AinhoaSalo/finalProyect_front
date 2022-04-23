import "./HamburgerMenu.css"
import React from "react";
import {slide as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import {NavLink , useLocation} from 'react-router-dom'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function HeaderBurguer() {
  let [open, setOpen]= useState(false)
  return(
    <>

      <div class="mobile-container">
        <div class="topnav">
          <NavLink className="linkHeader" to="/inicio">Inicio</NavLink>
          {open ? <div id="myLinks">
            <NavLink className="linkHeader" to="/inicio">Inicio</NavLink>
            <NavLink className="linkHeader" to="/italia">Italia</NavLink>
            <NavLink className="linkHeader" to="/eeuu">EEUU</NavLink>
            <NavLink className="linkHeader" to="/listascreadas">Planning</NavLink>
            <NavLink className="linkHeader" to="/registro">Registro</NavLink>
          </div>: <></>}
          <a className="icon" onClick={()=>setOpen(!open)}>
          <FontAwesomeIcon icon={solid('bars')} size="2x" />
          </a>
        </div>
      </div>
    </>  

  )
  
}

export default HeaderBurguer;