import './DestinationsToTravel.css'
import {Link} from 'react-router-dom'
import newYork from '../images/newYork.jpg'
import italy from '../images/florence.jpg'
import {Parallax} from 'react-parallax'
import secondImgParallax from '../images/pexels-oliver-sjöström-931018.jpg'

function DestinationsToTravel() {

  return(
    /* PREGUNTAR ERLANTZ LINKS  */
    <> 
      <Parallax bgImage={secondImgParallax} strength={500}>
          <div className='styleParallaxSecond'></div>
        </Parallax> 
      <div className='travelHomeMobile'>
        <div className='italyHomePage'>
          <h2>Italia</h2>
          <Link className='linkItaly' to="#">
            <div className='parrafImgHomeItaly'>
              <div className='parrafHomeItaly'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p></div>
              <img className='imgHomeItaly' src={italy} alt="Florence" />
            </div>
          </Link>           
        </div>
        <div className='eeuuHomePage'>
          <h2>EEUU</h2>
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
          <h2>Italia</h2>
          <Link className='linkItaly' to="#">
            <div className='parrafImgHomeItaly'>
              <div className='parrafHomeItaly'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p></div>
              <img className='imgHomeItaly' src={italy} alt="Florence" />
            </div>
          </Link>          
        </div>
        <div className='eeuuHomePage'>
          <h2>EEUU</h2>
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
          <h2>Italia</h2>
          <Link className='linkItaly' to="#">
            <div className='parrafImgHomeItaly'>
              <div className='parrafHomeItaly'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p></div>
              <img className='imgHomeItaly' src={italy} alt="Florence" />
            </div>
          </Link>        
        </div>
        <div className='eeuuHomePage'>
          <h2>EEUU</h2>
          <Link className='linkNewYork' to="#">
            <div className='parrafImgHomeNewYork'>         
              <div className='parrafHomeNewYork'><p className='textItalyEeuuParrafHomeNewYork'>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p></div>
              <img className='imgHomeNewYork' src={newYork} alt="NewYork" />
            </div>
          </Link>          
        </div>
      </div>
    </>
  )

}

export default DestinationsToTravel;