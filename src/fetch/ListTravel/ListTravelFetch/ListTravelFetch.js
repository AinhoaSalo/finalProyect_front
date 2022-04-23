import "./ListTravelFetch.css"
import LinksPlanning from "../linksPlanning/LinksPlanning";
import { useEffect, useState} from "react"
import Travel from "./travel/Travel";

function ListTravelFetch() {
  let [travelFetch, setTravelFetch] = useState([]);
  let user = sessionStorage.getItem('nameUserLogin');
  let isLogged = false;
  if (user != null) {
    isLogged = true;
  }

  useEffect(()=>{
    fetch("http://localhost:8000/travel?nameUserLogin=test")
    .then(response=>response.json())
    .then(res=>{
      setTravelFetch(res.travel);
    }) 
  }, [])
  
  function redirect(){
    window.location.replace("http://localhost:3000/registro");
  }

  function renderPage() {
    
    return (
      <>
      <div className="allListTravelFetch">
        <LinksPlanning/>
        <div className="allCollapsible">
          {
            travelFetch !== 0
          ?
            travelFetch.map((travel, i) =>{
              return <Travel key={i} travel={travel}/>
            })
          :
            ""
          }
        </div>
      </div>
    </>
    );
  }

  return (
    <>
    {isLogged ? renderPage() : redirect()}
    </>
  );
}

export default ListTravelFetch;
