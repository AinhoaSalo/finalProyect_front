import './PlanningList.css';
import {Parallax} from 'react-parallax';
import { Link } from 'react-router-dom';


import list from "./img/list.jpg";
import girl from "./img/girl.png";



function PlanningList() {
  return(
    <>
      <div className='styleSpacePlanningListHome'>
        <div className='allPlanningHome'>
            <div className='titlePlanningHome'>
              <h2 className='titlePlanning'>Planea tu viaje</h2>
              <p className='parrafPlanning'>Para poder acceder al apartado de crear tus listas, debes registrarte para poder gestionar de una forma personalizada tus viajes.</p>
            </div>
            <div className='planningHome'>
              <Link className='linkCreateList' to="/listascreadas">
                  <img className='imgHomePlanning' src={list} alt="maleta" />
              </Link>           
            </div>
        </div>
      </div>
      <Parallax bgImage={girl} strength={500}>
        <div className='styleParallaxThird'></div>
      </Parallax> 
    </>
  )

}

export default PlanningList;