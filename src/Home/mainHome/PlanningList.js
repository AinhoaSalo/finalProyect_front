import './PlanningList.css';
import {Link} from 'react-router-dom'
import {Parallax} from 'react-parallax'
import thirdImgParallax from '../imagesHome/camera.jpg'


function PlanningList() {
  return(
    <>
      <div className='list'>holaaaaa</div>
      <Parallax bgImage={thirdImgParallax} strength={500}>
        <div className='styleParallaxThird'></div>
      </Parallax> 
    </>
  )

}

export default PlanningList;