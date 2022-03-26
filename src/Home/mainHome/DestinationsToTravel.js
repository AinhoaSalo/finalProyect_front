import './DestinationsToTravel.css'
import {Link} from 'react-router-dom'
import {Parallax} from 'react-parallax'
import newYork from '../imagesHome/newYork.jpg'
import italy from '../imagesHome/florence.jpg'
import secondImgParallax from '../imagesHome/pexels-oliver-sjöström-931018.jpg'


function DestinationsToTravel() {

  return(
    /* PREGUNTAR ERLANTZ LINKS  */
    <> 
      <div className='styleSpaceDescriptionPage'>
        <div className='allTravelHome'>
          <div className='titleDestinationsToTravel'><h2>Ideas de como como organizar tus viajes</h2></div>
          <div className='travelHomeMobile'>
            <div className='italyHomePage'>
              <h3>Italia</h3>
              <Link className='linkItaly' to="#">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p></div>
                  <img className='imgHomeItaly' src={italy} alt="Florence" />
                </div>
              </Link>           
            </div>
            <div className='eeuuHomePage'>
              <h3>EEUU</h3>
              <Link className='linkNewYork' to="#">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p></div>
                  <img className='imgHomeNewYork' src={newYork} alt="NewYork" />
                </div>
              </Link>         
            </div>
          </div>
          <div className='travelHomeDesktop'>
            <div className='italyHomePage'>
              <h3>Italia</h3>
              <Link className='linkItaly' to="#">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p></div>
                  <img className='imgHomeItaly' src={italy} alt="Florence" />
                </div>
              </Link>          
            </div>
            <div className='eeuuHomePage'>
              <h3>EEUU</h3>
              <Link className='linkNewYork' to="#">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p></div>
                  <img className='imgHomeNewYork' src={newYork} alt="NewYork" />
                </div>
              </Link>         
            </div>
          </div>
          <div className='travelHomeDesktopMaxPixel'>
            <div className='italyHomePage'>
              <h3>Italia</h3>
              <Link className='linkItaly' to="#">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p></div>
                  <img className='imgHomeItaly' src={italy} alt="Florence" />
                </div>
              </Link>        
            </div>
            <div className='eeuuHomePage'>
              <h3>EEUU</h3>
              <Link className='linkNewYork' to="#">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p></div>
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