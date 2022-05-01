import { useState } from "react";
import OptionsDestination from "./OptionsDestinations";
import swal from 'sweetalert';

function AddPlaces({travelAll, setTravelAll, day, destination, setDestination}){
  let [createPlacesList, setcreatePlacesList] = useState("");
  let [createDescriptionList, setcreateDescriptionList] = useState("");
  let auxTravelDestination = {...travelAll};

  function AddPlace() {
    let contadorDay = 0;
    auxTravelDestination.days.forEach((days, i) => {
      if (days.day === day) {
        contadorDay = i
      }
    });
    let days = auxTravelDestination.days[contadorDay]
    let contadorDestination = 0;
    days.destinations.forEach((destinations, i) => {
      if (destinations.destination === destination) {
        contadorDestination = i
      }
    })
    let places = days.destinations[contadorDestination].places
    if (places !== undefined && places[0].name !== undefined && places[0].name === "" && places[0].description === "") {
      places[0].name = createPlacesList;
      places[0].description = createDescriptionList;
    } else{
      if(createPlacesList.length > 0 && createDescriptionList.length > 0){
        if (places === undefined){
          places = [{
            name: createPlacesList,
            description: createDescriptionList
          }]
          auxTravelDestination.days[contadorDay].destinations[contadorDestination].places = places
        }
        else if (checkIfExist(places, createPlacesList)){
          places.push({
            name: createPlacesList,
            description: createDescriptionList
          });
        }else{
          swal("sitio repetido")
        }
    }

    }
    setTravelAll(auxTravelDestination);
    setcreatePlacesList("");
    setcreateDescriptionList("");
  }

  return(
    <>
      <OptionsDestination travelAll={travelAll} day={day} destination={destination} setDestination={setDestination}/>
      <p className="pInput">Sitio:</p>
      <input className="input" type="text" onChange={e=>setcreatePlacesList(e.target.value)} value={createPlacesList}/>
      <div><p className="pInput">Descripción lugar a visitar:</p><textarea className="input"  onChange={e=>setcreateDescriptionList(e.target.value)} value={createDescriptionList}/></div>
      <button className="buttonCreateList" onClick={AddPlace}>Guardar</button>
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
export default AddPlaces;