function OptionsDay({travelAll}) {
  //usar onchange para seleccionar el valor
  if (travelAll.days.length > 0){   
    return (
      <>
      <select>
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