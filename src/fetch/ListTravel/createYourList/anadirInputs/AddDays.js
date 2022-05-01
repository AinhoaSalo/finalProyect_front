import { useState } from "react";
import swal from 'sweetalert';


function AddDays({travelAll, setTravelAll}){
  let [createDayList, setcreateDayList] = useState("");

  function AddDay() {
    let auxTravelDay = {...travelAll};
    if (createDayList.length > 0) {
      if (auxTravelDay.days !== undefined && auxTravelDay.days.length === 1 && auxTravelDay.days[0].day === "") {
        auxTravelDay.days[0].day = createDayList;
      } else {
        if (checkIfExist(auxTravelDay.days, createDayList)){
          auxTravelDay.days.push({
            day: createDayList
          });
        } else {
          swal("Día repetido")
        }
      }
      setTravelAll(auxTravelDay);  
      setcreateDayList(""); 
    }
  }

  return(
    <>
      <p className="pInput">Día:</p>
      <input className="input" type="text" onChange={e=>setcreateDayList(e.target.value)} value={createDayList} placeholder="Ej: Día 1"/>
      <button className="buttonCreateList" onClick={AddDay}>Guardar</button>
    </>
    
  )
}

function checkIfExist(array, element) {
  let found = array.some(el => el.day === element);
  if (found){
    return false
  } else {
    return true
  }
}
export default AddDays;