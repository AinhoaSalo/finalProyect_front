import RenderDestination from "./DestinationFetch";

function RenderDays({days}) {
  return(
    <>
      {
        days.days.map(day =>{
          return(
          <>
            <p className="daysExampleFetch">{day.day}</p>
            <RenderDestination day={day}/>
          </>
          )
        })
      }
    </>
  )
}

export default RenderDays;