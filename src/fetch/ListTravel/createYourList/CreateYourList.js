import "./CreateYourList.css"
import LinksPlanning from "../linksPlanning/LinksPlanning";


function CreateYourList() {
  // let [travelFetch, setTravelFetch] = useState(0);

  // useEffect(()=>{
  //   fetch("http://localhost:8000/travel?nameUserLogin=test")
  //   .then(response=>response.json())
  //   .then(res=>{
  //     console.log(res)
  //     setTravelFetch(res.travel);
  //   }) 
  // }, [])

  return (
    <>
      <div className="createYourListSmartPhone">
        <LinksPlanning/>
        <div className="allStyleCreateYourListSmartPhone">
          <div className="allInputsCreateYourListSmartPhone">
            <div className="inputCreateListSmartPhone"><p>Título:</p><input type="text" /></div>
            <div className="inputCreateListSmartPhone"><p>Día:</p><input type="text" /></div>
            <div className="inputCreateListSmartPhone"><p>Destino del día:</p><input type="text" /></div>
            <div className="inputCreateListSmartPhone"><p>Nombre lugar a visitar:</p><input type="text" /></div>
            <div className="inputCreateListSmartPhone"><p>Descripción lugar a visitar:</p><input type="text" /></div>
          </div>
          <div className="textAddInputsCreateYourListSmartPhone">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat qui nesciunt dolorem dolores, esse sed voluptates pariatur eaque doloribus omnis placeat odit ipsam voluptas saepe labore aut odio nulla?</p>
          </div>
        </div>
      </div>
      <div className="createYourListMobile">
        <LinksPlanning/>
        <div className="allStyleCreateYourListMobile">
          <div className="allInputsCreateYourListMobile">
            <div className="inputCreateListMobile"><p>Título:</p><input type="text" /></div>
            <div className="inputCreateListMobile"><p>Día:</p><input type="text" /></div>
            <div className="inputCreateListMobile"><p>Destino del día:</p><input type="text" /></div>
            <div className="inputCreateListMobile"><p>Nombre lugar a visitar:</p><input type="text" /></div>
            <div className="inputCreateListMobile"><p>Descripción lugar a visitar:</p><input type="text" /></div>
          </div>
          <div className="textAddInputsCreateYourListMobile">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat qui nesciunt dolorem dolores, esse sed voluptates pariatur eaque doloribus omnis placeat odit ipsam voluptas saepe labore aut odio nulla?</p>
          </div>
        </div>
      </div>
      <div className="createYourListDesktop">
        <LinksPlanning/>
        <div className="allStyleCreateYourListDesktop">
          <div className="allInputsCreateYourListDesktop">
            <div className="inputCreateListDesktop"><p>Título:</p><input type="text" /></div>
            <div className="inputCreateListDesktop"><p>Día:</p><input type="text" /></div>
            <div className="inputCreateListDesktop"><p>Destino del día:</p><input type="text" /></div>
            <div className="inputCreateListDesktop"><p>Nombre lugar a visitar:</p><input type="text" /></div>
            <div className="inputCreateListDesktop"><p>Descripción lugar a visitar:</p><input type="text" /></div>
          </div>
          <div className="textAddInputsCreateYourListDesktop">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat qui nesciunt dolorem dolores, esse sed voluptates pariatur eaque doloribus omnis placeat odit ipsam voluptas saepe labore aut odio nulla?</p>
          </div>
        </div>
      </div>
      <div className="createYourListDesktopMaxPixel">
        <LinksPlanning/>
        <div className="allStyleCreateYourListDesktopMaxPixel">
          <div className="allInputsCreateYourListDesktopMaxPixel">
            <div className="inputCreateListDesktopMaxPixel"><p>Título:</p><input type="text" /></div>
            <div className="inputCreateListDesktopMaxPixel"><p>Día:</p><input type="text" /></div>
            <div className="inputCreateListDesktopMaxPixel"><p>Destino del día:</p><input type="text" /></div>
            <div className="inputCreateListDesktopMaxPixel"><p>Nombre lugar a visitar:</p><input type="text" /></div>
            <div className="inputCreateListDesktopMaxPixel"><p>Descripción lugar a visitar:</p><input type="text" /></div>
          </div>
          <div className="textAddInputsCreateYourListDesktopMaxPixel">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat qui nesciunt dolorem dolores, esse sed voluptates pariatur eaque doloribus omnis placeat odit ipsam voluptas saepe labore aut odio nulla?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateYourList;
