import Destination from "../ListTravelFetch/destination/Destination";

function Day({day}) {
  return (
    <>

      <Collapsible trigger={day.day}>
      {
      travel.days.map((day, i)=>{
        console.log(day)
        return <Destination key={i} day={day}/>
      })
      }
    </Collapsible>
    </>
  );
}

export default Day;
