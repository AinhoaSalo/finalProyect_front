import "./ListTravelFetch.css"
import { useEffect, useState} from "react"
import {config} from "../../objets/constants"
import swal from 'sweetalert';
import Travel from "./travel/Travel";
import LinksPlanning from "../linksPlanning/LinksPlanning";

function ListTravelFetch() {
  let [travelFetch, setTravelFetch] = useState([]);
  let user = sessionStorage.getItem('nameUserLogin');
  let isLogged = false;
  if (user != null) {
    isLogged = true;
  }

  useEffect(()=>{
    fetch(config.url.API_URL + "/travel?" + new URLSearchParams({nameUserLogin: sessionStorage.getItem('nameUserLogin'),}))
    .then(response=>response.json())
    .then(res=>{
      setTravelFetch(res.travel);
    }) 
  }, [])
  
  function redirect(){
    window.location.replace("/registro");
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

    fetch(config.url.API_URL + "/travel", data)
    .then(response=>response.json())
    .then(function (res) {
      if (res.delete === true){
        swal(res.message);
        deleteFromTravelArray(travel);
      } else {
        swal(res.message);
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
            travelFetch.length !== 0
            ? 
              travelFetch.map(travel =>{
                return (
                  <>
                    <div className="collapsibleAndButton">
                      <Travel  key={travel.title} travel={travel}/>
                      <button className="buttonDeleteListDataBase" onClick={()=>deleteTravel(travel)}>Borrar</button>
                    </div>
                  </>
                )
              })
            :
              <><p className="travelNoCreate">No hay viajes creados</p></>
          :
            <><p className="travelNoCreate">No hay viajes creados</p></>
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
