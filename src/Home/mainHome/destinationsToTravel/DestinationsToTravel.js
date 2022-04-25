import './DestinationsToTravel.css';
import {Link} from 'react-router-dom'
import {Parallax} from 'react-parallax'

import newYork from './img/newYork.jpg'
import italy from './img/florence.jpg'

import secondImgParallax from './img/pexels-oliver-sjöström-931018.jpg'

function DestinationsToTravel() {

  return(
    <> 
      <div className='styleSpaceDescriptionPage'>
        <div className='allTravelHome'>
          <div className='titleDestinationsToTravel'><h2>Ejemplos de como crear tu itinerario para tus viajes</h2></div>
          <div className='travelHome'>
            <div className='italyHomePage'>
              <Link className='linkItaly' to="/italia">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'>
                    <div className='textItalyEeuuParrafHome'>
                      <h3>Italia</h3>
                      <p>Aquí puedes ver ej ejemplo de 2 días en Italia</p>
                    </div>
                  </div>
                  <img className='imgHomeItaly' src={italy} alt="Florence" />
                </div>
              </Link>           
            </div>
            <div className='eeuuHomePage'>
              <Link className='linkNewYork' to="/eeuu">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'>
                    <div className='textItalyEeuuParrafHome'>
                      <h3>EEUU</h3>
                      <p>Aquí puedes ver ej ejemplo de 2 días días en NY</p>
                    </div>
                  </div>
                  <img className='imgHomeNewYork' src={newYork} alt="NewYork" />
                </div>
              </Link>         
            </div>
          </div>
        </div>
      </div>
      <Parallax bgImage={secondImgParallax} strength={500}>
        <div className='styleParallaxSecond'></div>
      </Parallax>
    </>
  )

}

export default DestinationsToTravel;