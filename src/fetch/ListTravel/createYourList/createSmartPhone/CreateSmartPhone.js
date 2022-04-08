import "./CreateSmartPhone.css"
import LinksPlanning from "../../linksPlanning/LinksPlanning";
import AddTitle from "../anadirInputs/AddTitle";
import { useState } from "react";
import objetTravel from "../../../objets/objetTravel";


function CreateSmartPhone() {
  let [travelAll, setTravelAll] = useState(objetTravel);

  return (
    <>
      <div className="createYourListSmartPhone">
        <LinksPlanning/>
        <div className="allStyleCreateYourListSmartPhone">
          <div className="allInputsCreateYourListSmartPhone">
            <div className="inputCreateListSmartPhone hidden">
            <AddTitle travelAll={travelAll} setTravelAll={setTravelAll}/>
            </div>
            <div className="inputCreateListSmartPhone hidden">
              <p className="pInputSmartPhone">Día:</p>

            </div>
            <div className="inputCreateListSmartPhone hidden">
              <p className="pInputSmartPhone">Destino del día:</p>

            </div>
            <div className="inputCreateListSmartPhone hidden">
              <p className="pInputSmartPhone">Nombre lugar a visitar:</p>

            </div>
            <div className="inputCreateListSmartPhone hidden">
              <p className="pInputSmartPhone">Descripción lugar a visitar:</p>

            </div>
          </div>
          <div className="textAddInputsCreateYourListSmartPhone">
            <h2>{travelAll.title}</h2>         
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSmartPhone;
