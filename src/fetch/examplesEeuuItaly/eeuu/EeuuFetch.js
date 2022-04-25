import { useState, useEffect} from "react";
import RenderDays from "../italy/DayFetch";
import "../italyEeuuFetch.css";
import river from "../img/river.jpg";


function EeuuFetch() {
  let [eeuu, setEeuu] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/eeuu")
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
              <RenderDays days={eeuu}/>
            </div>
            <div className="divImgItalyEeuu">
              <img className="imgItalyEeuu" src={river} alt="" />
              <img className="imgItalyEeuu" src={river} alt="" />
              <img className="imgItalyEeuu" src={river} alt="" />
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

