import "./HamburgerMenu.css"
import React from "react";
import {slide as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import {NavLink , useLocation} from 'react-router-dom'

function HeaderBurguer() {

  return(
    <>
      <Menu>
        <div className='headerBurguer'>
          <NavLink id="home" className="menu-item" to="/inicio">Inicio</NavLink>
          <NavLink id="about" className="menu-item" to="/about">About</NavLink>
          <NavLink id="contact" className="menu-item" to="/contact">Contact</NavLink>
        </div>
      </Menu>
    </>  

  )
  
}

export default HeaderBurguer;