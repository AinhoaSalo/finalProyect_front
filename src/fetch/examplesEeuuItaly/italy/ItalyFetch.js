import { useState, useEffect} from "react"
import {config} from "../../objets/constants"
import RenderDays from "./DayFetch";
import "../italyEeuuFetch.css";
import italyImg from "../img/italy.jpg";
import river from"../img/river.jpg"
import vespa from"../img/vespa.jpg"

function ItalyFetch() {
  let [italy, setItaly] = useState([]);

  useEffect(()=>{
    fetch(config.url.API_URL + "/italia")
    .then(response=>response.json())
    .then(res=>{
      setItaly(res.italy)
    })
  }, [])

  function renderItaly() {
    let title = italy.title
    return(
      <>
        <div className="allExampleFetch">
          <div className="styleExampleFetch">
            <div className="titleRenderExample">
              <h2 className="titleExampleFetch">{title}</h2>
              <RenderDays key={italy.title} travelAll={italy} button={false}/>
            </div>
            <div className="divImgItalyEeuu">
              <img className="imgItalyEeuu" src={italyImg} alt="" />
              <img className="imgItalyEeuu" src={vespa} alt="" />
              <img className="imgItalyEeuu" src={river} alt="" />
            </div>
          </div>
        </div>
      </>
    )    
  }


  return (
    <>
    {italy.length !== 0 ? renderItaly() : <></>}
    </>
  );
}

export default ItalyFetch;

