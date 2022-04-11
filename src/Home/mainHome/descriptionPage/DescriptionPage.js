import './DescriptionPage.css';
import firstImgParallax from './img/sea.jpg';
import {Parallax} from 'react-parallax'

function DescriptionPage() {
    return(
      <>
        <Parallax bgImage={firstImgParallax} strength={600}>
        <div className='styleParallaxFirst'></div>
        <div className='descriptionPageSmartPhone'>
          <h2 className='titleDescripcionPage'>¡Planea tu viaje!</h2>
          <p className='parrafDescripcionPage'>¿Te gusta tener todo organizado para que no se te olvide nada en tus viajes? A mi también, de ahí nace PlanYourTrip. Cuando viajo me gusta tener todo detallado ya que (me ha ocurrido) puede que se te olvide ese sitio tan guay que llevas tiempo queriendo ir o bar donde sirven tu cerveza favorita.</p>
        </div>
        <div className='descriptionPageMobile'>
          <h2 className='titleDescripcionPage'>¡Planea tu viaje!</h2>
          <p className='parrafDescripcionPage'>¿Te gusta tener todo organizado para que no se te olvide nada en tus viajes? A mi también, de ahí nace PlanYourTrip. Cuando viajo me gusta tener todo detallado ya que (me ha ocurrido) puede que se te olvide ese sitio tan guay que llevas tiempo queriendo ir o bar donde sirven tu cerveza favorita.</p>
        </div>
        <div className='descriptionPageDesktop'>
          <h2 className='titleDescripcionPage'>¡Planea tu viaje!</h2>
          <p className='parrafDescripcionPage'>¿Te gusta tener todo organizado para que no se te olvide nada en tus viajes? A mi también, de ahí nace PlanYourTrip. Cuando viajo me gusta tener todo detallado ya que (me ha ocurrido) puede que se te olvide ese sitio tan guay que llevas tiempo queriendo ir o bar donde sirven tu cerveza favorita.</p>
        </div>
        <div className='descriptionPageDesktopMaxPixel'>
          <h2 className='titleDescripcionPage'>¡Planea tu viaje!</h2>
          <p className='parrafDescripcionPage'>¿Te gusta tener todo organizado para que no se te olvide nada en tus viajes? A mi también, de ahí nace PlanYourTrip. Cuando viajo me gusta tener todo detallado ya que (me ha ocurrido) puede que se te olvide ese sitio tan guay que llevas tiempo queriendo ir o bar donde sirven tu cerveza favorita.</p>
        </div>
        </Parallax>
  
      </>
    )
  
  }

export default DescriptionPage;