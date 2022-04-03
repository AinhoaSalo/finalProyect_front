import "./CreateDesktop.css"
import LinksPlanning from "../../linksPlanning/LinksPlanning";
import AddTitle from "../anadirInputs/AddTitle";
import { useState } from "react";
import objetTravel from "../objetList/objetTravel";

function CreateDesktop() {
  let [travelAll, setTravelAll] = useState(objetTravel);
  

  return (
    <>
      <div className="createYourListDesktop">
        <LinksPlanning/>
        <div className="allStyleCreateYourListDesktop">
          <div className="allInputsCreateYourListDesktop">
            <div className="inputCreateListDesktop">
            <AddTitle travelAll={travelAll} setTravelAll={setTravelAll}/>
            </div>
            <div className="inputCreateListDesktop hidden">
                <p className="pInputDesktop">Día:</p>

            </div>
            <div className="inputCreateListDesktop hidden">
                <p className="pInputDesktop">Destino del día:</p>

            </div>
            <div className="inputCreateListDesktop hidden">
                <p className="pInputDesktop">Nombre lugar a visitar:</p>

            </div>
            <div className="inputCreateListDesktop hidden">
                <p className="pInputDesktop">Descripción lugar a visitar:</p>

            </div>
          </div>
          <div className="textAddInputsCreateYourListDesktop">
            <h2>{travelAll.title}</h2>          
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateDesktop;
