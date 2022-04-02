import Destinations from "../destinations/Destinations";
import Collapsible from 'react-collapsible';

function Day({day}) {
  return (
    <>
      {/* <h3>{day.day}</h3> */}
      <Collapsible className="pointer" trigger={day.day}>
      {
      day.destinations.map((destinations, i)=>{
        return <Destinations key={i} destinations={destinations}/>
      })
      }
    </Collapsible>
    </>
  );
}

export default Day;
