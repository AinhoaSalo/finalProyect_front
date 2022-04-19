import { useState, useEffect} from "react"

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
    console.log(italy);
    let title = italy[0].title
    return(
      <>
         <h2>{title}</h2>
      </>
    )
      
  }

  
  
  return (
    <>
    {italy.length > 0 ? renderItaly() : <></>}
    </>
  );
}

export default ItaliFetch;

