import "./CreateSmartPhone.css"
import LinksPlanning from "../../linksPlanning/LinksPlanning";


function CreateSmartPhone() {
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
            <div className="inputCreateListSmartPhone">
              <p className="pInputSmartPhone">Título:</p>
              <input className="inputSmartPhone" type="text" />
              <button >Enviar</button>
            </div>
            <div className="inputCreateListSmartPhone">
              <p className="pInputSmartPhone">Día:</p>
              <input className="inputSmartPhone" type="text" />
              <button >Enviar</button>
            </div>
            <div className="inputCreateListSmartPhone">
              <p className="pInputSmartPhone">Destino del día:</p>
              <input className="inputSmartPhone" type="text" />
              <button >Enviar</button>
            </div>
            <div className="inputCreateListSmartPhone">
              <p className="pInputSmartPhone">Nombre lugar a visitar:</p>
              <input className="inputSmartPhone" type="text" />
              <button >Enviar</button>
            </div>
            <div className="inputCreateListSmartPhone">
              <p className="pInputSmartPhone">Descripción lugar a visitar:</p>
              <input className="inputSmartPhone" type="text" />
              <button >Enviar</button>
            </div>
          </div>
          <div className="textAddInputsCreateYourListSmartPhone">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat qui nesciunt dolorem dolores, esse sed voluptates pariatur eaque doloribus omnis placeat odit ipsam voluptas saepe labore aut odio nulla?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSmartPhone;
