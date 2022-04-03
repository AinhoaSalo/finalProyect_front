import "./CreateMobile.css"
import LinksPlanning from "../../linksPlanning/LinksPlanning";

function CreateMobile() {
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
      <div className="createYourListMobile">
        <LinksPlanning/>
        <div className="allStyleCreateYourListMobile">
          <div className="allInputsCreateYourListMobile">
            <div className="inputCreateListMobile">
              <p className="pInputMobile">Título:</p>
              <input className="inputMobile" type="text" />
              <button>Enviar</button>
            </div>
            <div className="inputCreateListMobile">
              <p className="pInputMobile">Día:</p>
              <input className="inputMobile" type="text" />
              <button>Enviar</button>
            </div>
            <div className="inputCreateListMobile">
              <p className="pInputMobile">Destino del día:</p>
              <input className="inputMobile" type="text" />
              <button>Enviar</button>
            </div>
            <div className="inputCreateListMobile">
              <p className="pInputMobile">Nombre lugar a visitar:</p>
              <input className="inputMobile" type="text" />
              <button>Enviar</button>
            </div>
            <div className="inputCreateListMobile">
              <p className="pInputMobile">Descripción lugar a visitar:</p>
              <input className="inputMobile" type="text" />
              <button>Enviar</button>
            </div>
          </div>
          <div className="textAddInputsCreateYourListMobile">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat qui nesciunt dolorem dolores, esse sed voluptates pariatur eaque doloribus omnis placeat odit ipsam voluptas saepe labore aut odio nulla?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateMobile;