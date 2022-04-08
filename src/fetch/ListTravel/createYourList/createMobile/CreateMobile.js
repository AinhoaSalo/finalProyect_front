import "./CreateMobile.css"
import LinksPlanning from "../../linksPlanning/LinksPlanning";
import AddTitle from "../anadirInputs/AddTitle";
import { useState } from "react";
import objetTravel from "../../../objets/objetTravel";

function CreateMobile() {
  let [travelAll, setTravelAll] = useState(objetTravel);

  return (
    <>
      <div className="createYourListMobile">
        <LinksPlanning/>
        <div className="allStyleCreateYourListMobile">
          <div className="allInputsCreateYourListMobile">
            <div className="inputCreateListMobile">
            <AddTitle travelAll={travelAll} setTravelAll={setTravelAll}/>
            </div>
            <div className="inputCreateListMobile hidden">
              <p className="pInputMobile">Día:</p>

            </div>
            <div className="inputCreateListMobile hidden">
              <p className="pInputMobile">Destino del día:</p>

            </div>
            <div className="inputCreateListMobile hidden">
              <p className="pInputMobile">Nombre lugar a visitar:</p>

            </div>
            <div className="inputCreateListMobile hidden">
              <p className="pInputMobile">Descripción lugar a visitar:</p>

            </div>
          </div>
          <div className="textAddInputsCreateYourListMobile">
            <h2>{travelAll.title}</h2>          
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateMobile;