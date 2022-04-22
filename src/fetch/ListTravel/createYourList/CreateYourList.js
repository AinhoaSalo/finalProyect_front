import "./CreateYourList.css"
import { useEffect, useState } from "react";
import LinksPlanning from "../linksPlanning/LinksPlanning";
import AddTitle from "./anadirInputs/AddTitle";
import objetTravel from "../../objets/objetTravel";
import AddDays from "./anadirInputs/AddDays"
import AddDestinations from "./anadirInputs/AddDestination";
import AddPlaces from "./anadirInputs/AddPlaces";


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
    window.location.replace("http://localhost:3000/registro");
  }

  function renderPage() {
    let list = 
    travelAll.days.map(days=>{
      return (
      <>
        <p>{days.day}</p>
        {
          days.destinations ?
          days.destinations.map(destinations=>{
            return (  
              <>
                <p>{destinations.destination}</p>
                {
                  destinations.places ?
                  destinations.places.map(places=>{
                      return(
                        <>
                        <p>{places.name}</p>
                        <p>{places.description}</p>
                        </>
                      ) 
                  })
                  : <></>
                }
              </> 
            )
          
          })
          : <></>
        }
      </>
      )
    })

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
              <div className="inputCreateList">
                
              </div>
            </div>
            <div className="textAddInputsCreateYourList">
              <h2>{travelAll.title}</h2>
              {list}
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



