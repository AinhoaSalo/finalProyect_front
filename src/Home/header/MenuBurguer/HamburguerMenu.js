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
      {/* <Menu>
        <div className='headerBurguer'>
          <NavLink id="home" className="menu-item" to="/inicio">Inicio</NavLink>
          <NavLink id="about" className="menu-item" to="/about">About</NavLink>
          <NavLink id="contact" className="menu-item" to="/contact">Contact</NavLink>
        </div>
      </Menu> */}



      <div class="mobile-container">

      <div class="topnav">
        <a href="#home" class="active">Logo</a>
        {open ? <div id="myLinks">
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>: <></>}
        <a class="icon" onClick={()=>setOpen(!open)}>
        <FontAwesomeIcon icon={solid('bars')} size="2x" />
        </a>
      </div>
</div>

    </>  

  )
  
}

export default HeaderBurguer;