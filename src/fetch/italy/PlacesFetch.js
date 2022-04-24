function RenderPlaces({destination}){
  return(
    <>
      {destination.places !== undefined ? 
        destination.places[0].name !== "" ?
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
        : <> </>
      :<></>
      }
    </>
  ) 
};

export default RenderPlaces;