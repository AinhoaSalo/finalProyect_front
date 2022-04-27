import "../ListTravelFetch.css"
import Destinations from "../destinations/Destinations";
import Collapsible from 'react-collapsible';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Day({day}) {
  let [open, setOpen]= useState(false)
  if (day.destinations !== undefined) {
    return (
      <>
        <Collapsible className="pointer days" trigger={<>{day.day} <FontAwesomeIcon icon={solid('circle-chevron-down')} size="2xs" rotation={open ? 180 : 0}/></>} onOpen={()=> setOpen(true)} onClose={()=> setOpen(false)}>
          {
          day.destinations.map((destinations, i)=>{
            return <Destinations key={i} destinations={destinations}/>
          })
          }
        </Collapsible>
      </>
    );
  }else{
    return(<></>)
  }
  
}

export default Day;
