import RenderPlaces from "./PlacesFetch";

function RenderDestination({day}){
  return(
      <>
        {day.destinations !== undefined ? day.destinations.map(destination =>{
          return(
            <>
            <p>{destination.destination}</p>
            <RenderPlaces destination={destination}/>
            </>
          )
        }) 
        : <></>
      }
      </>
  ) 
}

export default RenderDestination;