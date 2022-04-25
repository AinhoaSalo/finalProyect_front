import Collapsible from 'react-collapsible';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Destinations({destinations}) {
  let [open, setOpen]= useState(false)
  return (
    <>
      <Collapsible className="pointer" trigger={<>{destinations.destination} <FontAwesomeIcon icon={solid('circle-chevron-down')} size="2xs" rotation={open ? 180 : 0}/></>} onOpen={()=> setOpen(true)} onClose={()=> setOpen(false)}>
      <ol>
      {
      destinations.places.map((place, i)=>{
        return (
          <>
            <li>
              <Collapsible className="pointer" trigger={<>{place.name} <FontAwesomeIcon icon={solid('arrow-down')} size="2xs"/></>}>
              <p key={i}>{place.description}</p>
              </Collapsible>
            </li>
          </>
        ) 
      })
      }
      </ol>
    </Collapsible>
    </>
  );
}

export default Destinations;
