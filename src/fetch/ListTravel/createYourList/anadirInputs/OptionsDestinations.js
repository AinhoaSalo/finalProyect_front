import { useState } from "react"

function OptionsDestination({travelAll, day, destination, setDestination}) {

  let contador = 0;
  travelAll.days.forEach((days, i) => {
    if (days.day == day) {
      contador = i
    }
  });
  console.log(travelAll.days[contador])

  if (travelAll.days[contador].destinations == undefined ){   
    return ( 
      <select>      
          <option>Añade un día</option>
      </select>)
   } else if(travelAll.days[contador].destinations.length > 0){
    return (
      <>
      <select onChange={(e)=> setDestination(e.target.value)} value={destination}>
      {travelAll.days[contador].destinations.map((destination, i)=>{
        return(    
          <>     
            <option key={i} value={destination.destination}>{destination.destination}</option>
          </>
        )
      })}
      </select>
      </>
    )
  } else {
    return ( 
    <select>      
        <option>Añade un día</option>
    </select>)
}
        
}



export default OptionsDestination