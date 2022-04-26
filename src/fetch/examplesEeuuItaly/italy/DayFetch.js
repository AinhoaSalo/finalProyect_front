import RenderDestination from "./DestinationFetch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function RenderDays({travelAll, setDays, button}) {
  debugger
  if (travelAll.days == undefined){
    return (<></>)
  } else {
    return(
      <>
        {
          travelAll.days.map(day =>{
            if (button){
              return(
                <>
                  <p className="daysExampleFetch">{day.day}</p>
                  <FontAwesomeIcon icon={solid('trash-can')} size="xs" onClick={()=>deleteInputListUser(day)}/>
                  <RenderDestination day={day} button={button}/>
                </>
              )
            } else {
              return(
                <>
                  <p className="daysExampleFetch">{day.day}</p>
                  <RenderDestination day={day} button={button}/>
                </>
              )
            }
          })
        }
      </>
    )
  }

  function deleteInputListUser(day) {
    let auxArray = {...travelAll}
    if (auxArray.days == undefined){
      return
    }
    for (let i = 0; i < auxArray.days.length; i++) {
      if(auxArray.days[i].day === day.day){
        auxArray.days.splice(i, 1);
        i--;
      }
    }
    setDays(auxArray);
  }
}

export default RenderDays;