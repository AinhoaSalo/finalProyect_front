import './Header.css';
import HeaderMaxPixel from './HeaderMaxPixel/HeaderMaxPixel';
import HambuergerMenu from './MenuBurguer/HamburguerMenu';

function Header() {
  return(
    <>
      <HeaderMaxPixel/>
      <HambuergerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
    </>
  )
    
}

export default  Header