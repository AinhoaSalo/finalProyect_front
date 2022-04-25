function RenderPlaces({destination}){
  return(
    <>
      {destination.places !== undefined ? 
        destination.places[0].name !== "" ?
          <ol className="olExampleFetch">
            {destination.places.map(place =>{
              return(
                <>
                  <>
                    <li className="liExampleFetchName">{place.name}:</li><p className="liExampleFetchdescription">{place.description}</p>
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