

function Destination({destination}) {
  return (
    <>
      <h2>{travel.title}</h2>
      {
      travel.Destinations.map((Destination, i)=>{
        return <Destination key={i} Destination={Destination}/>
      })
      }
    </>
  );
}

export default Travel;
