import RenderPlaces from "./PlacesFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function RenderDestination({day, button}){
  if (button) {
    return(
      <>
        {day.destinations !== undefined ? day.destinations.map(destination =>{
          return(
            <>
            <p className="destinationsExampleFetch">{destination.destination}</p>
            <FontAwesomeIcon className="deleteListUser" icon={solid('trash-can')} size="xs"/>
            <RenderPlaces destination={destination} button={button}/>
            </>
          )
        }) 
        : <></>
      }
      </>
  )
  }else{
    return(
      <>
        {day.destinations !== undefined ? day.destinations.map(destination =>{
          return(
            <>
            <p className="destinationsExampleFetch">{destination.destination}</p>
            <RenderPlaces destination={destination} button={button}/>
            </>
          )
        }) 
        : <></>
      }
      </>
  ) 
  }
  
}

export default RenderDestination;