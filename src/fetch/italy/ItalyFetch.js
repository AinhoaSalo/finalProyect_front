
import { useState, useEffect } from "react"

function ItalyFetch() {
  // let [destinationPlace, setDestinationPlace] = useState(undefined);
  // let [pokemon, setPokemon] = useState(undefined);
  let [executeFetch, setexecuteFetch] = useState(false);

  useEffect(()=>{
    if (executeFetch) {
      fetch("http://localhost:3000/destinations?nameUserLogin=test")
      .then(response=>response.json())
      .then(res=>{
        console.log(res)
      }) 
    }
    
  }, [executeFetch])


  return (
    <>
    <p>Hola</p>
    {/* <input type="text" onChange={(e)=>setNombrePokemon(e.target.value)} value={destinationPlace}/>
    <button onClick={()=>setexecuteFetch(true)}>Buscar pokemon</button>
    {
      pokemon != undefined
      ?
      <div>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default}/>
      </div>
    :
    "dale al boton para traer al pokemon"} */}
    </>
  );
}

export default ItalyFetch;
