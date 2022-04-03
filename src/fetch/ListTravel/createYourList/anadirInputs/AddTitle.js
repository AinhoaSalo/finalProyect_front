import { useState } from "react";

function AddTitle({travelAll, setTravelAll}){
  let [createTitleList, setCreateTitleList] = useState("");
  
  function Add() {
    let auxTravel = travelAll;
    auxTravel.title = createTitleList;
    setTravelAll(auxTravel)
    setCreateTitleList("")
    console.log(auxTravel)
  }
  
 
  return(
    <>
      <p className="pInput">Título:</p>
      <input className="input" type="text" onChange={e=>setCreateTitleList(e.target.value)} value={createTitleList}/>
      <button onClick={Add}>Guardar</button>
    </>
    
  )
}

export default AddTitle;