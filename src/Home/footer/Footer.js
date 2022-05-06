import './Footer.css';
import logo from './img/srtasalogris.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export function Footer() {
  return(
    <>
      <div className='footer'>
        <div className='logoSrtaSalo'><img className='imgLogoSrtaSalo' src={logo} alt="Logo SrtaSalo" /></div>
        <div className='socialMediaTitle'><h3>Redes sociales</h3></div>
        <ul className='socialMedia'>
          <li><a className='linkGithub' href="https://github.com/AinhoaSalo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={brands('github')} size="2x" /></a></li>
          <li><a className='linkLinkedin' href="https://www.linkedin.com/in/ainhoa-hernandez-salo/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={brands('linkedin')} size="2x" /></a></li>
          <li><a className='linkTwitter' href="https://twitter.com/SrtaSalo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={brands('twitter')} size="2x" /></a></li>
        </ul>
      </div>
    </>
  )
}
  
// export default Footer;
