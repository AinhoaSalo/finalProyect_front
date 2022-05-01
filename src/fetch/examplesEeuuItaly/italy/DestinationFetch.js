import RenderPlaces from "./PlacesFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function RenderDestination({day, travelAll, setTravelAll, button}){
  
  if (day.destinations === undefined) {
    return (<></>)
  }else{
    return(
      <>
        {day.destinations !== undefined ? day.destinations.map(destination =>{
          if (button) {
            return(
            <>
            <p className="destinationsExampleFetch">{destination.destination} <FontAwesomeIcon className="binInputs" icon={solid('trash-can')} size="xs" onClick={()=>deleteInputListUser(destination)}/></p>
            <RenderPlaces day={day} destination={destination} travelAll={travelAll} setTravelAll={setTravelAll} button={button}/>
            </>
          )
          } else {
             return(
            <>
            <p className="destinationsExampleFetch">{destination.destination}</p>
            <RenderPlaces destination={destination} travelAll={travelAll} button={button}/>
            </>
            )
          }
          
        }) 
        : <></>
      }
      </>
    )
  }

  function deleteInputListUser(destination) {
    let array = {...travelAll}
    // if (auxArray.day.destinations === undefined){
    //   return (<></>)
    // }
    for (let i = 0; i < array.days.length; i++) {
      if (array.days[i].day === day.day) {
        for (let j = 0; j < array.days[i].destinations.length; j++) {
        if(array.days[i].destinations[j].destination === destination.destination){
          array.days[i].destinations.splice(j, 1);
          j--;
        }
      }
      
    }
      
    }
    
    setTravelAll(array);
  }
}

export default RenderDestination;