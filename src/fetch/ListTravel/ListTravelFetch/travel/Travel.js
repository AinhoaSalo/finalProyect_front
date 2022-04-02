import Day from "../day/Day";
import Collapsible from 'react-collapsible';

function Travel({travel}) {
  return (
    <>
      <div className="titleCollapsible">
        <Collapsible className="pointer title" trigger={travel.title}>
          {/* <h2>{travel.title}</h2> */}
          {
          travel.days.map((day, i)=>{
            return <Day key={i} day={day}/>
          })
          }
        </Collapsible>
      </div>
    </>
  );
}

export default Travel;
