import './DescriptionPage.css';
import firstImgParallax from './img/sea.jpg';
import {Parallax} from 'react-parallax'

function DescriptionPage() {
    return(
      <>
        <Parallax bgImage={firstImgParallax} strength={600}>
        <div className='styleParallaxFirst'></div>
        <div className='descriptionPage'>
          <h2 className='titleDescripcionPage'>¡Planea tu viaje!</h2>
          <p className='parrafDescripcionPage'>¿Te gusta tener todo organizado para que no se te olvide nada? A mí también, de ahí nace PlanYourTrip. Cuando viajo, me gusta tener todo detallado para que no se te olvide ese sitio tan guay que llevas tiempo queriendo ir o poder disfrutar del bar donde sirven tu bebida favorita.</p>
        </div>
        </Parallax>
      </>
    )
  
  }

export default DescriptionPage;