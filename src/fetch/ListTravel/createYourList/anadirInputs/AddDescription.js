// import { useState } from "react";
// import OptionsDestination from "./OptionsDestinations";

// function AddDescription({travelAll, setTravelAll, day, destination, setDestination}){
//   let [createDescriptionList, setcreateDescriptionList] = useState([]);

//   function AddDescription() {
//     debugger
//     if(createDescriptionList.length > 0){
//       let auxTravelDestination = {...travelAll};
//       let contadorDay = 0;
//       auxTravelDestination.days.forEach((days, i) => {
//         if (days.day == day) {
//           contadorDay = i
//         }
//       });
//       let contadorDestination = 0;
//       auxTravelDestination.days[contadorDay].destinations.forEach((destinations, i) => {
//         if (destinations.day == destination) {
//           contadorDestination = i
//         }
//       })
//       if (auxTravelDestination.days[contadorDay].destinations[contadorDestination].Description == undefined){
//         auxTravelDestination.days[contadorDay].destinations[contadorDestination].Description = [{name: createDescriptionList}]
//       }
//       else if (checkIfExist(auxTravelDestination.days[contadorDay].destinations[contadorDestination].Description, createDescriptionList)){
//         auxTravelDestination.days[contadorDay].destinations[contadorDestination].Description.push({
//           name: createDescriptionList
//         });
//       }else{
//         alert("sitio repetido")
//       }
//       setTravelAll(auxTravelDestination);
//       setcreateDescriptionList("");
//     }

//   }

//   return(
//     <>
//       <OptionsDestination travelAll={travelAll} day={day} destination={destination} setDestination={setDestination}/>
//       <p className="pInput">Sitio:</p>
//       <input className="input" type="text" onChange={e=>setcreateDescriptionList(e.target.value)} value={createDescriptionList}/>
//       <button onClick={AddDescription}>Guardar</button>
//     </>
    
//   )
// }

// function checkIfExist(array, element) {
//   let found = array.some(el => el.destination === element);
//   if (found){
//     return false
//   } else {
//     return true
//   }
// }
// export default AddDescription;