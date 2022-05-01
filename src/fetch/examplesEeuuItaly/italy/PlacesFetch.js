import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function RenderPlaces({day, travelAll, setTravelAll, destination, button}){
  if (destination.places === undefined) {
    return (<></>)
  }else{
    return(
      <>
        {destination.places !== undefined ? 
          destination.places.length > 0 ?
            <ol className="olExampleFetch">
              {destination.places.map(place =>{
                if (button) {
                  return(
                  <>
                    <>
                      <li className="liExampleFetchName">{place.name}: <FontAwesomeIcon className="binInputs" icon={solid('trash-can')} size="xs" onClick={()=>deleteInputListUser(place)}/></li><p className="liExampleFetchdescription">{place.description}</p>
                    </> 
                  </>
                )
                } else{
                   return(
                      <>
                        <>
                          <li className="liExampleFetchName">{place.name}:</li><p className="liExampleFetchdescription">{place.description}</p>
                        </> 
                      </>
                   )
                 }
              })}
            </ol> 
          : <> </>
        :<></>
        }
      </>
    ) 
  }

  function deleteInputListUser(place) {
    let array = {...travelAll}
    // if (array.places === undefined){
    //   return
    // }
    for (let i = 0; i < array.days.length; i++) {
      if (array.days[i].day === day.day) {
        for (let j = 0; j < array.days[i].destinations.length; j++) {
          if(array.days[i].destinations[j].places === destination.places){
            for (let k = 0; k < array.days[i].destinations[j].places.length; k++) {
              if(array.days[i].destinations[j].places[k].name === place.name && array.days[i].destinations[j].places[k].description === place.description){
                array.days[i].destinations[j].places.splice(k, 1);
                k--;
              }
            }
          }
        }
      }
    }
    setTravelAll(array);
  }
};

export default RenderPlaces;