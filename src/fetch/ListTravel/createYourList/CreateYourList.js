import "./CreateYourList.css"
import { useState } from "react";
import LinksPlanning from "../linksPlanning/LinksPlanning";
import AddTitle from "./anadirInputs/AddTitle";
import objetTravel from "../../objets/objetTravel";
import objetTravel2 from "../../objets/objetTravel2";
import AddDays from "./anadirInputs/AddDays"
import AddDestinations from "./anadirInputs/AddDestination";
import AddPlaces from "./anadirInputs/AddPlaces";
import RenderDays from "../../italy/DayFetch";


function CreateYourList() {
  let [travelAll, setTravelAll] = useState(objetTravel);
  let aux = objetTravel2;
  let [day, setDay] = useState ("");
  let [destination, setDestination] = useState ("");
  let user = sessionStorage.getItem('nameUserLogin');
  let isLogged = false;
  if (user != null) {
    isLogged = true;
  }

  function redirect(){
    window.location.replace("http://localhost:3000/registro");
  }

  function sendTravel() {
    let user = sessionStorage.getItem('nameUserLogin');
    let objectToSend = {
      travel: travelAll,
      user: user
    }
    let data = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(objectToSend),
    };
    fetch("http://localhost:8000/travel", data)
    .then(response=>response.json())
    .then(res=>{
      setTravelAll(aux);
      window.location.reload()
    })
    
  }

  function renderPage() {
    return (
      <>
        <div className="createYourList">
          <LinksPlanning/>
          <div className="allStyleCreateYourList">
            <div className="allInputsCreateYourList">
              <div className="inputCreateList">
                <AddTitle travelAll={travelAll} setTravelAll={setTravelAll}/>
              </div>
              <div className="inputCreateList">
                <AddDays travelAll={travelAll} setTravelAll={setTravelAll} />
              </div>
              <div className="inputCreateList">
                <AddDestinations travelAll={travelAll} setTravelAll={setTravelAll} day={day} setDay={setDay}/>
              </div>
              <div className="inputCreateList">
                <AddPlaces travelAll={travelAll} setTravelAll={setTravelAll} day={day} destination={destination} setDestination={setDestination}/>
              </div>
              <div className="buttonEnviar">
                <button onClick={()=>sendTravel()}>Enviar</button>
              </div>
            </div>
            <div className="textAddInputsCreateYourList">
              <h2>{travelAll.title}</h2>
              <RenderDays days={travelAll}/>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    isLogged ? renderPage() : redirect()
  );
}

export default CreateYourList;



