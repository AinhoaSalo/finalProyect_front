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
          <div className='travelHomeSmartPhone'>
            <div className='italyHomePageSmartPhone'>
              <Link className='linkItaly' to="#">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'>
                    <div className='textItalyEeuuParrafHomeSmartPhone'>
                      <h3>Italia</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p>
                    </div>
                  </div>
                  <img className='imgHomeItalySmartPhone' src={italy} alt="Florence" />
                </div>
              </Link>           
            </div>
            <div className='eeuuHomePageSmartPhone'>
              <Link className='linkNewYork' to="#">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'>
                    <div className='textItalyEeuuParrafHomeSmartPhone'>
                      <h3>EEUU</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p>
                    </div>
                  </div>
                  <img className='imgHomeNewYorkSmartPhone' src={newYork} alt="NewYork" />
                </div>
              </Link>         
            </div>
          </div>
          <div className='travelHomeMobile'>
            <div className='italyHomePageMobile'>
              <Link className='linkItaly' to="#">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'>
                  <div className='textItalyEeuuParrafHomeMobile'>
                      <h3>Italia</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p>
                    </div>
                  </div>
                  <img className='imgHomeItalyMobile' src={italy} alt="Florence" />
                </div>
              </Link>           
            </div>
            <div className='eeuuHomePageMobile'>
              <Link className='linkNewYork' to="#">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'>
                  <div className='textItalyEeuuParrafHomeMobile'>
                      <h3>EEUU</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p>
                    </div>
                  </div>
                  <img className='imgHomeNewYorkMobile' src={newYork} alt="NewYork" />
                </div>
              </Link>         
            </div>
          </div>
          <div className='travelHomeDesktop'>
            <div className='italyHomePageDesktop'>
              <Link className='linkItaly' to="#">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'>
                    <div className='textItalyEeuuParrafHomeDesktop'>
                      <h3>Italia</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p>
                    </div>
                  </div>
                  <img className='imgHomeItalyDesktop' src={italy} alt="Florence" />
                </div>
              </Link>          
            </div>
            <div className='eeuuHomePageDesktop'>
              <Link className='linkNewYork' to="#">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'>
                    <div className='textItalyEeuuParrafHomeDesktop'>
                      <h3>EEUU</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p>
                    </div>
                  </div>
                  <img className='imgHomeNewYorkDesktop' src={newYork} alt="NewYork" />
                </div>
              </Link>         
            </div>
          </div>
          <div className='travelHomeDesktopMaxPixel'>
            <div className='italyHomePageDesktopMaxPixel'>
              <Link className='linkItaly' to="#">
                <div className='parrafImgHomeItaly'>
                  <div className='parrafHomeItaly'>
                    <div className='textItalyEeuuParrafHomeDesktopMaxPixel'>
                      <h3>Italia</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 9 días en Italia</p>
                    </div>
                  </div>
                  <img className='imgHomeItalyDesktopMaxPixel' src={italy} alt="Florence" />
                </div>
              </Link>        
            </div>
            <div className='eeuuHomePageDesktopMaxPixel'>
              <Link className='linkNewYork' to="#">
                <div className='parrafImgHomeNewYork'>         
                  <div className='parrafHomeNewYork'>
                    <div className='textItalyEeuuParrafHomeDesktopMaxPixel'>
                      <h3>EEUU</h3>
                      <p>Aquí puedes ver un ejemplo de itinerario para 8 días en NY</p>
                    </div>
                  </div>
                  <img className='imgHomeNewYorkDesktopMaxPixel' src={newYork} alt="NewYork" />
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