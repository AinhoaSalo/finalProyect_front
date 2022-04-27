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
    fetch("http://localhost:8000/travel?" + new URLSearchParams({nameUserLogin: sessionStorage.getItem('nameUserLogin'),}))
    .then(response=>response.json())
    .then(res=>{
      setTravelFetch(res.travel);
    }) 
  }, [])
  
  function redirect(){
    window.location.replace("http://localhost:3000/registro");
  }

  function deleteTravel(travel){
    let nameUserLogin = sessionStorage.getItem('nameUserLogin');

    let travelDelete = {
      nameUserLogin,
      travel,
    };

    let data = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(travelDelete),
    };

    fetch("http://localhost:8000/travel", data)
    .then(response=>response.json())
    .then(function (res) {
      if (res.delete == true){
        alert(res.message);
        deleteFromTravelArray(travel);
      } else {
        alert(res.message);
      }
    });
  }

  useEffect(()=>{
    renderPage()
  }, [travelFetch])

  function deleteFromTravelArray(travel){
    let auxTravel = {...travelFetch};
    //Recorremos el diccionario y eliminamos el que toca
    for (let i = Object.keys(auxTravel).length - 1; i >= 0; i--){
      if (auxTravel[i].title === travel.title){
        delete auxTravel[i]
      }
    }
    //Transforma el diccionario en un array
    auxTravel = Object.values(auxTravel)
    setTravelFetch(auxTravel)
  }

  function renderPage() {
    return (
      <>
      <div className="allListTravelFetch">
        <LinksPlanning/>
        <div className="allCollapsible">
          { 
            travelFetch !== undefined
          ?
            travelFetch.map((travel, i) =>{
              return (
                <>
                  <Travel key={i} travel={travel}/>
                  <button onClick={()=>deleteTravel(travel)}>Borrar</button>
                </>
              )
            })
          :
            "No hay listas creadas"
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
