
import Collapsible from 'react-collapsible';


function Destinations({destinations}) {
  console.log(destinations)
  return (
    <>
      <Collapsible trigger={destinations.destination}>
      <ol>
      {
      destinations.places.map((place, i)=>{
        return (
          <>
            <li>
              <Collapsible trigger={place.name}>
              <p key={i}>{place.description}</p>
              </Collapsible>
            </li>
          </>
        ) 
      })
      }
      </ol>
    </Collapsible>
    </>
  );
}

export default Destinations;
