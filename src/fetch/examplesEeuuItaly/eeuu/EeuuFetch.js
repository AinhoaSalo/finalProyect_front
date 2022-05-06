import { useState, useEffect} from "react";
import {config} from "../../objets/constants"
import RenderDays from "../italy/DayFetch";
import "../italyEeuuFetch.css";
import nyc from "../img/nyc.jpg";
import subway from "../img/subway.jpg"
import dumbo from "../img/dumbo.jpg"



function EeuuFetch() {
  let [eeuu, setEeuu] = useState([]);

  useEffect(()=>{
    fetch(config.url.API_URL + "/eeuu")
    .then(response=>response.json())
    .then(res=>{
      setEeuu(res.eeuu)
    }) 
  }, [])

  function renderEeuu() {
    let title = eeuu.title
    return(
      <>
        <div className="allExampleFetch">
          <div className="styleExampleFetch">
            <div className="titleRenderExample">
              <h2 className="titleExampleFetch">{title}</h2>
              <RenderDays key={eeuu.title} travelAll={eeuu} button={false}/>
            </div>
            <div className="divImgItalyEeuu">
              <img className="imgItalyEeuu EeuuImg" src={nyc} alt="" />
              <img className="imgItalyEeuu EeuuImg" src={dumbo} alt="" />
              <img className="imgItalyEeuu EeuuImg" src={subway} alt="" />
            </div>
          </div>
        </div>
      </>
    )    
  }

  return (
    <>
    {eeuu.length !== 0 ? renderEeuu() : <></>}
    </>
  );
}

export default EeuuFetch;

