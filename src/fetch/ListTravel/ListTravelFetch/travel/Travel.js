import "../ListTravelFetch.css"
import Day from "../day/Day";
import Collapsible from 'react-collapsible';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Travel({travel}) {
  let [open, setOpen]= useState(false)
  return (
    <>
      <div className="titleCollapsible">
        <Collapsible className="pointer title" trigger={<>{travel.title} <FontAwesomeIcon icon={solid('circle-chevron-down')} size="xs" rotation={open ? 180 : 0}/></>} onOpen={()=> setOpen(true)} onClose={()=> setOpen(false)}>
          {
          travel.days.map(day=>{
            return <Day key={travel.title} day={day} travel={travel}/>
          })
          }
        </Collapsible>
      </div>
    </>
  );
}

export default Travel;
