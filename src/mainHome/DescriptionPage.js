import './DescriptionPage.css'
import {Parallax} from 'react-parallax'
import firstImgParallax from '../images/sea.jpg'


function DescriptionPage() {
  return(
    <>
      <Parallax bgImage={firstImgParallax} strength={600}>
      <div className='styleParallaxFirst'></div>
      <div className='descriptionPage'>
        <h2 className='titleDescripcionPage'>¡Planea tu viaje!</h2>
        <p className='parrafDescripcionPage'>¿Te gusta tener todo organizado para que no se te olvide nada en tus viajes? A mi también, de ahí nace PlanYourTrip. Cuando viajo me gusta tener todo detallado ya que (me ha ocurrido) puede que se te olvide ese sitio tan guay que llevas tiempo queriendo ir o bar donde sirven tu cerveza favorita. También podrás anotar que necesitas meter en tu maleta</p>
      </div>
      </Parallax>
      <div className='styleSpaceDescriptionPage'></div>
    </>
  )

}

export default DescriptionPage;