import { useState } from "react";
import OptionsDay from "./OptionsDays";
// import React, { Component } from 'react'
// import Select from 'react-select'

function AddDays({travelAll, setTravelAll}){
  let [createDayList, setcreateDayList] = useState("");

  function AddDay() {
    if(createDayList.length > 0){
      let auxTravelDay = travelAll;
      if (checkIfExist(auxTravelDay.days, createDayList)){
        auxTravelDay.days.push({
          day: createDayList
        });
      }else{
        alert("Día repetido")
      }
      setTravelAll(auxTravelDay);
      setcreateDayList("");
    }

  }

  return(
    <>
      <p className="pInputDesktop">Día:</p>
      <input className="input" type="text" onChange={e=>setcreateDayList(e.target.value)} value={createDayList}/>
      <button onClick={AddDay}>Guardar</button>
      <OptionsDay travelAll={travelAll}/>
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