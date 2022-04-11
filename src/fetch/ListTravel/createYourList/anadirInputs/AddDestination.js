import { useState } from "react";
import OptionsDay from "./OptionsDays";
// import React, { Component } from 'react'
// import Select from 'react-select'

function AddDestinations({travelAll, setTravelAll, day}){
  let [createDestinationsList, setcreateDestinationsList] = useState([]);

  function AddDestination() {
    if(createDestinationsList.length > 0){
      let auxTravelDestination = {...travelAll};
      let contador = 0;
      auxTravelDestination.days.forEach((days, i) => {
        if (days.day == day) {
          contador = i
        }
      });
      if (checkIfExist(auxTravelDestination.days[contador].destinations, createDestinationsList)){
        auxTravelDestination.days[contador].destinations.push({
          destination: createDestinationsList
        });
      }else{
        alert("Día repetido")
      }
      setTravelAll(auxTravelDestination);
      setcreateDestinationsList("");
    }

  }

  return(
    <>
      <p className="pInputDesktop">Destino:</p>
      <input className="input" type="text" onChange={e=>setcreateDestinationsList(e.target.value)} value={createDestinationsList}/>
      <button onClick={AddDestination}>Guardar</button>
      <OptionsDay travelAll={travelAll}/>
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