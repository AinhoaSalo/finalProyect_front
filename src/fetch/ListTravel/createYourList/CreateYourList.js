import "./CreateYourList.css"
import { useEffect, useState } from "react";
import LinksPlanning from "../linksPlanning/LinksPlanning";
import AddTitle from "./anadirInputs/AddTitle";
import objetTravel from "../../objets/objetTravel";
import AddDays from "./anadirInputs/AddDays"
import AddDestinations from "./anadirInputs/AddDestination";
import AddPlaces from "./anadirInputs/AddPlaces";


function CreateYourList() {

  // 
  // let [createDestinationList, setcreateDestinationList] = useState("");
  // let [createPlaceList, setCreatePlaceList] = useState("");
  // let [createDescription, setCreateDescription] = useState("");
  // let [tripAll, setTripAll] = useState({})
  let [travelAll, setTravelAll] = useState(objetTravel);
  let [day, setDay] = useState ("")
  let [destination, setDestination] = useState ("")

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
                    return <p>{places.name}</p>
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
            <AddDays travelAll={travelAll} setTravelAll={setTravelAll} />
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
            <AddDestinations travelAll={travelAll} setTravelAll={setTravelAll} day={day} setDay={setDay}/>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
              
            <AddPlaces travelAll={travelAll} setTravelAll={setTravelAll} day={day} destination={destination} setDestination={setDestination}/>
            </div>
            <div className="inputCreateListDesktopMaxPixel hidden">
              <p className="pInputDesktopMaxPixel">Descripción lugar a visitar:</p>
            </div>
          </div>
          <div className="textAddInputsCreateYourListDesktopMaxPixel">
            <h2>{travelAll.title}</h2>
            {list}

          </div>
        </div>
      </div>
    </>
  );
}

export default CreateYourList;



