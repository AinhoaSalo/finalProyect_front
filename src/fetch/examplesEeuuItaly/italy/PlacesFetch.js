import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function RenderPlaces({destination, button}){
  if (button) {
    return(
      <>
        {destination.places !== undefined ? 
          destination.places[0].name !== "" ?
            <ol className="olExampleFetch">
              {destination.places.map(place =>{
                return(
                  <>
                    <>
                      <li className="liExampleFetchName">{place.name}:</li><p className="liExampleFetchdescription">{place.description}</p>
                      <FontAwesomeIcon className="deleteListUser" icon={solid('trash-can')} size="xs"/>
                    </> 
                  </>
                )
              })}
            </ol> 
          : <> </>
        :<></>
        }
      </>
    ) 
  }else{
    return(
      <>
        {destination.places !== undefined ? 
          destination.places[0].name !== "" ?
            <ol className="olExampleFetch">
              {destination.places.map(place =>{
                return(
                  <>
                    <>
                      <li className="liExampleFetchName">{place.name}:</li><p className="liExampleFetchdescription">{place.description}</p>
                    </> 
                  </>
                )
              })}
            </ol> 
          : <> </>
        :<></>
        }
      </>
    ) 
  }
  
};

export default RenderPlaces;