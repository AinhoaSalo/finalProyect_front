import './PlanningList.css';
import {Parallax} from 'react-parallax'
import { Link } from 'react-router-dom';
import thirdImgParallax from './img/camera.jpg'
import map from "./img/map.jpg"



function PlanningList() {
  return(
    <>
<div className='styleSpacePlanningListHomeSmartPhone'>
        <div className='allPlanningHomeSmartPhone'>
          <div className='titlePlanningHomeSmartPhone'>
            <h2>Planea tu viaje</h2>
            <p>En este apartado puedes accedes para crear tus viajes y visualizarlos una vez guardados</p>
            </div>
          <div className='planningHomeSmartPhone'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningSmartPhone' src={map} alt="maleta" />
            </Link>           
          </div>
        </div>
      </div>
      <div className='styleSpacePlanningListHomeMobile'>
        <div className='allPlanningHomeMobile'>
          <div className='titlePlanningHomeMobile'>
            <h2>Planea tu viaje</h2>
            <p>En este apartado puedes accedes para crear tus viajes y visualizarlos una vez guardados</p>
            </div>
          <div className='planningHomeMobile'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningMobile' src={map} alt="maleta" />
            </Link>           
          </div>
        </div>
      </div>
      <div className='styleSpacePlanningListHomeDesktop'>
        <div className='allPlanningHomeDesktop'>
          <div className='titlePlanningHomeDesktop'>
            <h2>Planea tu viaje</h2>
            <p>En este apartado puedes accedes para crear tus viajes y visualizarlos una vez guardados</p>
            </div>
          <div className='planningHomeDesktop'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningDesktop' src={map} alt="maleta" />
            </Link>           
          </div>
        </div>
      </div>
      <div className='styleSpacePlanningListHomeDesktopMaxPixel'>
        <div className='allPlanningHomeDesktopMaxPixel'>
          <div className='titlePlanningHomeDesktopMaxPixel'>
            <h2>Planea tu viaje</h2>
            <p>En este apartado puedes accedes para crear tus viajes y visualizarlos una vez guardados</p>
            </div>
          <div className='planningHomeDesktopMaxPixel'>
            <Link className='linkCreateList' to="/listascreadas">
                <img className='imgHomePlanningDesktopMaxPixel' src={map} alt="maleta" />
            </Link>           
          </div>
        </div>
      </div>
      <Parallax bgImage={thirdImgParallax} strength={500}>
        <div className='styleParallaxThird'></div>
      </Parallax> 
    </>
  )

}

export default PlanningList;