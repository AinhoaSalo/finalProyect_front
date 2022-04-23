import { useState, useEffect} from "react"
import RenderDays from "./DayFetch";


function ItaliFetch() {
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
        <h2>{title}</h2>
        <RenderDays days={italy}/>
      </>
    )    
  }


  return (
    <>
    {italy.length !== 0 ? renderItaly() : <></>}
    </>
  );
}

export default ItaliFetch;

