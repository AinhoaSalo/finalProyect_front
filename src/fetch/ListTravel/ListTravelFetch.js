
import { useState, useEffect } from "react"

function ListTravelFetch() {
  let [destinationPlace, setDestinationPlace] = useState(undefined);
  let [destinationFetch, setDestinationFetch] = useState(0);
  let [executeFetch, setExecuteFetch] = useState(false);
  let [title, setTitle] = useState("")

  useEffect(()=>{
    if (executeFetch) {
      fetch("http://localhost:8000/destinations?nameUserLogin=test")
      .then(response=>response.json())
      .then(res=>{
        setDestinationFetch(res.destinations);
        setExecuteFetch(false);
        destinationFetch.map(i =>{
          return setTitle = i.title;
        })


      }) 
    }
    
  }, [executeFetch])


  return (
    <>
    <div className="inputButtonPlanning">
    <input className="inputPlanning" type="text" placeholder="Nombre planning viaje" onChange={(e)=>setDestinationPlace(e.target.value)} value={destinationPlace}/>
    <button className="buttonPlanning" onClick={()=>setExecuteFetch(true)}>Buscar lista</button>
    </div>
      {
      destinationFetch != 0
      ?
      <div className="titleListUser"><h2>{title}</h2></div>
      :
      ""}
    </>
  );
}

export default ListTravelFetch;
