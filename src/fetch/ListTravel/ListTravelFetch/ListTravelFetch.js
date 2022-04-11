import "./ListTravelFetch.css"
import LinksPlanning from "../linksPlanning/LinksPlanning";
import { useState, useEffect } from "react"
import Travel from "./travel/Travel";

function ListTravelFetch() {
  let [travelFetch, setTravelFetch] = useState(0);

  useEffect(()=>{
    fetch("http://localhost:8000/travel?nameUserLogin=test")
    .then(response=>response.json())
    .then(res=>{
      setTravelFetch(res.travel);
    }) 
  }, [])

  return (
    <>
      <div className="allListTravelFetchSmartPhone">
        <LinksPlanning/>
        <div className="allCollapsibleSmartPhone">
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
      <div className="allListTravelFetchMobile">
        <LinksPlanning/>
        <div className="allCollapsibleMobile">
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
      <div className="allListTravelFetchDesktop">
        <LinksPlanning/>
        <div className="allCollapsibleDesktop">
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
      <div className="allListTravelFetchDesktopMaxPixel">
        <LinksPlanning/>
        <div className="allCollapsibleDesktopMaxPixel">
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

export default ListTravelFetch;
