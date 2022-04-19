import { useState, useEffect} from "react"

function ItaliFetch() {
  let [italyFetch, setItalyFetch] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/italia")
    .then(response=>response.json())
    .then(res=>{
      setItalyFetch(res);
      console.log(res)
    })
  },[]);
 
  function renderItaly() {
    let list =
    italyFetch.days.map(days=>{
      return (
      <>
        <p>{days.day}</p>
        {
          days.destinations.map(destinations=>{
            return (  
              <>
                <p>{destinations.destination}</p>
                {
                  destinations.places.map(places=>{
                      return <p>{places.name}</p>
                  })
                }
              </> 
            )
          
          })
        }
      </>
      )
    })

   return(
     <>
        {list}
     </>
   )
     
      
  }

  
  
  return (
    <>
    {renderItaly()}
    </>
  );
}

export default ItaliFetch;

