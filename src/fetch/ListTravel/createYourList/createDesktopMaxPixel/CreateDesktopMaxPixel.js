import "./CreateDesktopMaxPixel.css"
import AddAll from "../anadirInputs/AnadirInputs";
import LinksPlanning from "../../linksPlanning/LinksPlanning";
import { useState } from "react"

function CreateDesktopMaxPixel() {
  
  let [createTitleList, setcreateTitleList] = useState("");
  let [createDayList, setcreateDayList] = useState("");
  let [createDestinationList, setcreateDestinationList] = useState("");
  let [createPlaceList, setCreatePlaceList] = useState("");
  let [createDescription, setCreateDescription] = useState("");
  let addAll = new AddAll();
  return (
    <>
      <div className="createYourListDesktopMaxPixel">
        <LinksPlanning/>
        <div className="allStyleCreateYourListDesktopMaxPixel">
          <div className="allInputsCreateYourListDesktopMaxPixel">
            <div className="inputCreateListDesktopMaxPixel">
              <p className="pInputDesktopMaxPixel">Título:</p>
              <input className="inputDesktopMaxPixel" type="text" onChange={e=>setcreateTitleList(e.target.value)} value={createTitleList}/>
              <button  onClick={() => addAll.addTitle(createTitleList)}>Guardar</button>
            </div>
            <div className="inputCreateListDesktopMaxPixel">
              <p className="pInputDesktopMaxPixel">Día:</p>
              <input className="inputDesktopMaxPixel" type="text" onChange={e=>setcreateDayList(e.target.value)} value={createDayList}/>
              <button  onClick={() => addAll.addDay(createDayList)}>Guardar</button>
            </div>
            <div className="inputCreateListDesktopMaxPixel ">
              <p className="pInputDesktopMaxPixel">Destino del día:</p>
              <input className="inputDesktopMaxPixel" type="text" onChange={e=>setcreateDestinationList(e.target.value)} value={createDestinationList}/>
              <button  onClick={() => addAll.addDestinationsDay(createDestinationList)}>Guardar</button>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
              <p className="pInputDesktopMaxPixel">Nombre lugar a visitar:</p>
              <input className="inputDesktopMaxPixel" type="text" onChange={e=>setCreatePlaceList(e.target.value)} value={createPlaceList}/>
              <button  onClick={() => addAll.addPlacesVisitDay(createPlaceList)}>Guardar</button>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
              <p className="pInputDesktopMaxPixel">Descripción lugar a visitar:</p>
              <input className="inputDesktopMaxPixel" type="text" onChange={e=>setCreateDescription(e.target.value)} value={createDescription}/>
              <button  onClick={() => addAll.addDescriptionPlaces(createDescription)}>Guardar</button>
            </div>
          </div>
          <div className="textAddInputsCreateYourListDesktopMaxPixel">
            <p>Hola</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateDesktopMaxPixel;