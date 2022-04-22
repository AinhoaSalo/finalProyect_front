import RenderPlaces from "./PlacesFetch";

function RenderDestination({day}){
  console.log(day);
  return(
    <>
      {day.destinations.map(destination =>{
        return(
          <>
          <p>{destination.destination}</p>
          <RenderPlaces destination={destination}/>
          </>
        )
      })}
    </>
  ) 
}

export default RenderDestination;