import Day from "../../day/Day";
import Collapsible from 'react-collapsible';

function Travel({travel}) {
  return (
    <>
    <Collapsible trigger={travel.title}>
      {/* <h2>{travel.title}</h2> */}
      {
      travel.days.map((day, i)=>{
        console.log(day)
        return <Day key={i} day={day}/>
      })
      }
    </Collapsible>
    </>
  );
}

export default Travel;
