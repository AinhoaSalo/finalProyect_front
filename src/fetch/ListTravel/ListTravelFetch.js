
import { useState, useEffect } from "react"

function ListTravelfetch() {
  let [destinationPlace, setDestinationPlace] = useState(undefined);
  let [destinationFetch, setDestinationFetch] = useState(undefined);
  let [executeFetch, setExecuteFetch] = useState(false);

  useEffect(()=>{
    if (executeFetch) {
      fetch("http://localhost:3000/destinations?nameUserLogin=test")
      .then(response=>response.json())
      .then(res=>{
        console.log(res)
        // setDestinationFetch(res)
        // setExecuteFetch(false)
        // console.log(destinationFetch)
      }) 
    }
    
  }, [executeFetch])


  return (
    <>
    <input type="text" onChange={(e)=>setDestinationPlace(e.target.value)} value={destinationPlace}/>
    <button onClick={()=>setExecuteFetch(true)}>Buscar lista</button>
    {
      destinationFetch != undefined
      ?
      <div>
        <p>{destinationFetch.title}</p>
        <p>{destinationFetch.days.destinos.destino}</p>
      </div>
    :
    "dale al boton para ver la lista de tu viaje"}
    </>
  );
}

export default ListTravelfetch;
