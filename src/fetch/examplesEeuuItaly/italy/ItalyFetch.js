import { useState, useEffect} from "react"
import RenderDays from "./DayFetch";
import "../italyEeuuFetch.css";
import italyImg from "../img/italy.jpg";

function ItalyFetch() {
  let [italy, setItaly] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/italia")
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
              <RenderDays travelAll={italy} button={false}/>
            </div>
            <div className="divImgItalyEeuu">
              <img className="imgItalyEeuu" src={italyImg} alt="" />
              <img className="imgItalyEeuu" src={italyImg} alt="" />
              <img className="imgItalyEeuu" src={italyImg} alt="" />
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

