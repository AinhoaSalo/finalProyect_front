function OptionsDay({travelAll, day, setDay}) {
  if (travelAll.days !== undefined && travelAll.days[0] !== undefined && travelAll.days[0].day !== "" && travelAll.days.length > 0){   
    return (
      <>
      <select className="selectCreateList" onChange={(e)=> setDay(e.target.value)} value={day}>
      {travelAll.days.map((day)=>{
        return(    
          <>     
            <option key={travelAll.title} value={day.day}>{day.day}</option>
          </>
        )
      })}
      </select>
      </>
    )
  } else {
    return ( 
    <select className="selectCreateList">      
        <option>Añade un día</option>
    </select>)
}
        
}



export default OptionsDay