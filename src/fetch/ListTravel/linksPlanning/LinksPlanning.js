import "./LinksPlanning.css"
import {NavLink} from "react-router-dom"

function LinksPlanning() {

  return(
    <>
      <div className='navLinkListTravel'>
        <NavLink className="linkListTravel" to="/listascreadas">Tus viajes</NavLink>
        <NavLink className="linkListTravel" to="/creatulista">Crea tu itinerario de viaje</NavLink>
        <NavLink className="linkListTravel" to="/listascreadas">Area usuario</NavLink>
      </div>
      
    </>
  )
    
}

export default LinksPlanning;