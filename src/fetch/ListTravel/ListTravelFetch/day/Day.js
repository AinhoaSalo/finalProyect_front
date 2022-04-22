import "../ListTravelFetch.css"
import Destinations from "../destinations/Destinations";
import Collapsible from 'react-collapsible';

function Day({day}) {
  return (
    <>
      <Collapsible className="pointer days" trigger={day.day}>
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
