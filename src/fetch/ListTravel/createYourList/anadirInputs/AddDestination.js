import { useState } from "react";
import swal from 'sweetalert';
import OptionsDay from "./OptionsDays";

function AddDestinations({travelAll, setTravelAll, day, setDay}){
  let [createDestinationsList, setcreateDestinationsList] = useState([]);

  function AddDestination() {
    let auxTravelDestination = {...travelAll};
    let contador = 0;
    auxTravelDestination.days.forEach((days, i) => {
      if (days.day === day) {
        contador = i
      }
    });
    if (auxTravelDestination.days[contador].destinations !== undefined && auxTravelDestination. days[contador].destinations[0].destination === "") {
      auxTravelDestination.days[contador].destinations[0].destination = createDestinationsList
    }else{
      if(createDestinationsList.length > 0){
        if(auxTravelDestination.days[contador].destinations === undefined){
          auxTravelDestination.days[contador].destinations = [{destination: createDestinationsList}]
        }
        else if (checkIfExist(auxTravelDestination.days[contador].destinations, createDestinationsList)){
          auxTravelDestination.days[contador].destinations.push({
            destination: createDestinationsList
          });
        }else{
          swal("Día repetido")
        }
  
      }
    }
    setTravelAll(auxTravelDestination);
    setcreateDestinationsList("");
  }

  return(
    <>
      <OptionsDay travelAll={travelAll} day={day} setDay={setDay}/>
      <p className="pInput">Destino:</p>
      <input className="input" type="text" onChange={e=>setcreateDestinationsList(e.target.value)} value={createDestinationsList}/>
      <button className="buttonCreateList" onClick={AddDestination}>Guardar</button>
    </>
    
  )
}

function checkIfExist(array, element) {
  let found = array.some(el => el.destination === element);
  if (found){
    return false
  } else {
    return true
  }
}
export default AddDestinations;