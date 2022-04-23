import { useState } from "react"

function OptionsDay({travelAll, day, setDay}) {
  

  if (travelAll.days[0].day != "" && travelAll.days.length > 0){   
    return (
      <>
      <select onChange={(e)=> setDay(e.target.value)} value={day}>
      {travelAll.days.map((day, i)=>{
        return(    
          <>     
            <option key={i} value={day.day}>{day.day}</option>
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



export default OptionsDay