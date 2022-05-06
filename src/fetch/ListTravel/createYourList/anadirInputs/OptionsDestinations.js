function OptionsDestination({travelAll, day, destination, setDestination}) {
  let contador = 0;
  if (travelAll.days !== undefined && travelAll.days.length !== 0){
    travelAll.days.forEach((days, i) => {
      if (days.day === day) {
        contador = i
      }
    });
  }
  if (travelAll.days !== undefined && travelAll.days[contador] !== undefined && travelAll.days[contador].destinations === undefined ){   
    return ( 
      <select className="selectCreateList">      
          <option>Añade un destino</option>
      </select>)
   } else if(travelAll.days !== undefined && travelAll.days[contador] !== undefined && travelAll.days[contador].destinations.length > 0){
    return (
      <>
      <select className="selectCreateList" onChange={(e)=> setDestination(e.target.value)} value={destination}>
      {travelAll.days[contador].destinations.map(destination=>{
        return(    
          <>     
            <option key={travelAll.title} value={destination.destination}>{destination.destination}</option>
          </>
        )
      })}
      </select>
      </>
    )
  } else {
    return ( 
    <select className="selectCreateList">      
        <option>Añade un destino</option>
    </select>)
  }
        
}



export default OptionsDestination