import "./LinksPlanning.css"
import {NavLink} from "react-router-dom"

function LinksPlanning() {

  return(
    <>
      <div className='navLinkListTravel'>
        <div className="allLinksListTravel">
          <NavLink className="linkListTravel" to="/listascreadas">Tus viajes</NavLink>
          <NavLink className="linkListTravel" to="/creatulista">Crea tu itinerario de viaje</NavLink>
          <NavLink className="linkListTravel" to="/areapersonal">Area usuario</NavLink>
        </div>
      </div>
      
    </>
  )
    
}

export default LinksPlanning;