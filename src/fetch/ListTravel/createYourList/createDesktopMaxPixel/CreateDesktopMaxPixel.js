import "./CreateDesktopMaxPixel.css"
import LinksPlanning from "../../linksPlanning/LinksPlanning";
import AddTitle from "../anadirInputs/AddTitle";
import { useState } from "react";
import objetTravel from "../../../objets/objetTravel";
import AddDays from "../anadirInputs/AddDays"



function CreateDesktopMaxPixel() {

  // 
  // let [createDestinationList, setcreateDestinationList] = useState("");
  // let [createPlaceList, setCreatePlaceList] = useState("");
  // let [createDescription, setCreateDescription] = useState("");
  // let [tripAll, setTripAll] = useState({})
  let [travelAll, setTravelAll] = useState(objetTravel);

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
            <AddDays travelAll={travelAll} setTravelAll={setTravelAll}/>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
              <p className="pInputDesktopMaxPixel">Destino del día:</p>
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

export default CreateDesktopMaxPixel;