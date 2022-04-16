import { useState } from "react";
import OptionsDestination from "./OptionsDestinations";
// import React, { Component } from 'react'
// import Select from 'react-select'

function AddPlaces({travelAll, setTravelAll, day, destination, setDestination}){
  let [createPlacesList, setcreatePlacesList] = useState([]);

  function AddPlace() {
    debugger
    if(createPlacesList.length > 0){
      let auxTravelDestination = {...travelAll};
      let contadorDay = 0;
      auxTravelDestination.days.forEach((days, i) => {
        if (days.day == day) {
          contadorDay = i
        }
      });
      let contadorDestination = 0;
      auxTravelDestination.days[contadorDay].destinations.forEach((destinations, i) => {
        if (destinations.day == destination) {
          contadorDestination = i
        }
      })
      if (auxTravelDestination.days[contadorDay].destinations[contadorDestination].places == undefined){
        auxTravelDestination.days[contadorDay].destinations[contadorDestination].places = [{name: createPlacesList}]
      }
      else if (checkIfExist(auxTravelDestination.days[contadorDay].destinations[contadorDestination].places, createPlacesList)){
        auxTravelDestination.days[contadorDay].destinations[contadorDestination].places.push({
          name: createPlacesList
        });
      }else{
        alert("sitio repetido")
      }
      setTravelAll(auxTravelDestination);
      setcreatePlacesList("");
    }

  }

  return(
    <>
      <OptionsDestination travelAll={travelAll} day={day} destination={destination} setDestination={setDestination}/>
      <p className="pInputDesktop">Sitio:</p>
      <input className="input" type="text" onChange={e=>setcreatePlacesList(e.target.value)} value={createPlacesList}/>
      <button onClick={AddPlace}>Guardar</button>
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