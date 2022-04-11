
import Collapsible from 'react-collapsible';


function Destinations({destinations}) {
  return (
    <>
      <Collapsible className="pointer" trigger={destinations.destination}>
      <ol>
      {
      destinations.places.map((place, i)=>{
        return (
          <>
            <li>
              <Collapsible className="pointer" trigger={place.name}>
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
