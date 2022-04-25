import { useState, useEffect} from "react";
import RenderDays from "../italy/DayFetch";


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
        <h2>{title}</h2>
        <RenderDays days={eeuu}/>
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

