function RenderPlaces({destination}){
  console.log(destination)
  return(
    <>
      <ol>
        {destination.places.map(place =>{
          return(
            <>
              <>
                <li>{place.name}:</li><p>{place.description}</p>
              </> 
            </>
          )
        })}
      </ol>
      
    </>
  ) 
};

export default RenderPlaces;