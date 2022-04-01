import { useState, useEffect } from "react"
import Travel from "./travel/Travel";

function ListTravelFetch() {
  let [travelFetch, setTravelFetch] = useState(0);

  useEffect(()=>{
    fetch("http://localhost:8000/travel?nameUserLogin=test")
    .then(response=>response.json())
    .then(res=>{
      console.log(res)
      setTravelFetch(res.travel);
    }) 
  }, [])

  return (
    <>
      {
        travelFetch != 0
      ?
        travelFetch.map((travel, i) =>{
          return <Travel key={i} travel={travel}/>
        })
      :
        ""
      }
    </>
  );
}

export default ListTravelFetch;
