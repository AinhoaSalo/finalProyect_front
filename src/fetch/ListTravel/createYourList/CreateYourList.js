import "./CreateYourList.css"
import { useState, useEffect } from "react";
import {config} from "../../objets/constants"
import LinksPlanning from "../linksPlanning/LinksPlanning";
import AddTitle from "./anadirInputs/AddTitle";
import objetTravel from "../../objets/objetTravel";
import objetTravel2 from "../../objets/objetTravel2";
import AddDays from "./anadirInputs/AddDays"
import AddDestinations from "./anadirInputs/AddDestination";
import AddPlaces from "./anadirInputs/AddPlaces";
import RenderDays from "../../examplesEeuuItaly/italy/DayFetch";

function CreateYourList() {
  let [travelAll, setTravelAll] = useState(objetTravel);
  let [day, setDay] = useState ("");
  let [destination, setDestination] = useState ("");
  let user = sessionStorage.getItem('nameUserLogin');
  let isLogged = false;
  if (user != null) {
    isLogged = true;
  }

  function redirect(){
    window.location.replace("/registro");
  }

  useEffect(()=>{
    renderPage()
  }, [travelAll])

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
    fetch(config.url.API_URL + "/travel", data)
    .then(response=>response.json())
    .then(res=>{
      setTravelAll(objetTravel2);
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
              <div className="buttonSend">
                <button className="buttonCreateList" onClick={()=>sendTravel()}>Enviar</button>
              </div>
            </div>
            <div className="textAddInputsCreateYourList">
              <div className="inputsSaveUser">
                <h2>{travelAll.title}</h2>
                <RenderDays travelAll={travelAll} setTravelAll={setTravelAll} button={true}/>
              </div>
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



