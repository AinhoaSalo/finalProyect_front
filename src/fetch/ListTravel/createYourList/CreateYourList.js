import "./CreateYourList.css"
import { useEffect, useState } from "react";
import LinksPlanning from "../linksPlanning/LinksPlanning";
import AddTitle from "./anadirInputs/AddTitle";
import objetTravel from "../../objets/objetTravel";
import AddDays from "./anadirInputs/AddDays"
import AddDestinations from "./anadirInputs/AddDestination";

function CreateYourList() {

  // 
  // let [createDestinationList, setcreateDestinationList] = useState("");
  // let [createPlaceList, setCreatePlaceList] = useState("");
  // let [createDescription, setCreateDescription] = useState("");
  // let [tripAll, setTripAll] = useState({})
  let [travelAll, setTravelAll] = useState(objetTravel);
  let [day, setDay] = useState ("")

  useEffect(()=>{
    console.log(travelAll)
  }, [travelAll])

  return (
    <>
      <div className="createYourListDesktopMaxPixel">
        <LinksPlanning/>
        <div className="allStyleCreateYourListDesktopMaxPixel">
          <div className="allInputsCreateYourListDesktopMaxPixel">
            <div className="inputCreateListDesktopMaxPixel">
            <AddTitle travelAll={travelAll} setTravelAll={setTravelAll}/>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
            <AddDays travelAll={travelAll} setTravelAll={setTravelAll} day={day} setDay={setDay}/>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
            <AddDestinations travelAll={travelAll} setTravelAll={setTravelAll} day={day}/>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
              <p className="pInputDesktopMaxPixel">Nombre lugar a visitar:</p>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
              <p className="pInputDesktopMaxPixel">Descripción lugar a visitar:</p>
            </div>
          </div>
          <div className="textAddInputsCreateYourListDesktopMaxPixel">
            <h2>{travelAll.title}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateYourList;



