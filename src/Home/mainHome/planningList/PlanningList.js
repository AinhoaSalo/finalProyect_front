import './PlanningList.css';
import {Parallax} from 'react-parallax';
import { Link } from 'react-router-dom';


import list from "./img/list.jpg";
import girl from "./img/girl.png";



function PlanningList() {
  return(
    <>
      <div className='styleSpacePlanningListHome'>
        <div className='allPlanningHomeSmartPhone'>
          <div className='titlePlanningHomeSmartPhone'>
            <h2 className='titlePlanningSmartPhone'>Planea tu viaje</h2>
            <p className='parrafPlanningSmartPhone'>En este apartado puedes accedes para crear tus viajes y visualizarlos una vez guardados</p>
          </div>
          <div className='planningHomeSmartPhone'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningSmartPhone' src={list} alt="maleta" />
            </Link>           
          </div>
        </div>
        <div className='allPlanningHomeMobile'>
          <div className='titlePlanningHomeMobile'>
            <h2 className='titlePlanningMobile'>Planea tu viaje</h2>
            <p className='parrafPlanningMobile'>En este apartado puedes accedes para crear tus viajes y visualizarlos una vez guardados</p>
          </div>
          <div className='planningHomeMobile'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningMobile' src={list} alt="maleta" />
            </Link>           
          </div>
        </div>
        <div className='allPlanningHomeDesktop'>
          <div className='titlePlanningHomeDesktop'>
            <h2 className='titlePlanningDesktop'>Planea tu viaje</h2>
            <p className='parrafPlanningDesktop'>En este apartado puedes accedes para crear tus viajes y visualizarlos una vez guardados</p>
          </div>
          <div className='planningHomeDesktop'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningDesktop' src={list} alt="maleta" />
            </Link>           
          </div>
        </div>
        <div className='allPlanningHomeDesktopMaxPixel'>
          <div className='planningHomeDesktopMaxPixel'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningDesktopMaxPixel' src={list} alt="maleta" />
            </Link>           
          </div>
          <div className='titleAndParrafPlanningHomeDesktopMaxPixel'>
            <h2 className='titlePlanningDesktopMaxPixel'>Planea tu viaje</h2>
            <p className='parrafPlanningDesktopMaxPixel'>Puedes crear el Itinerario que vas a seguir en tu viaje, día por día, con el nombre de cada lugar y su descripción</p>
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