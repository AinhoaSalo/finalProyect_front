import "./CreateDesktop.css"
import LinksPlanning from "../../linksPlanning/LinksPlanning";

function CreateDesktop() {
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
      <div className="createYourListDesktop">
        <LinksPlanning/>
        <div className="allStyleCreateYourListDesktop">
          <div className="allInputsCreateYourListDesktop">
            <div className="inputCreateListDesktop">
                <p className="pInputDesktop">Título:</p>
                <input className="inputDesktop" type="text" />
                <button >Enviar</button>
            </div>
            <div className="inputCreateListDesktop">
                <p className="pInputDesktop">Día:</p>
                <input className="inputDesktop" type="text" />
                <button >Enviar</button>
            </div>
            <div className="inputCreateListDesktop">
                <p className="pInputDesktop">Destino del día:</p>
                <input className="inputDesktop" type="text" />
                <button >Enviar</button>
            </div>
            <div className="inputCreateListDesktop">
                <p className="pInputDesktop">Nombre lugar a visitar:</p>
                <input className="inputDesktop" type="text" />
                <button >Enviar</button>
            </div>
            <div className="inputCreateListDesktop">
                <p className="pInputDesktop">Descripción lugar a visitar:</p>
                <input className="inputDesktop" type="text" />
                <button >Enviar</button>
            </div>
          </div>
          <div className="textAddInputsCreateYourListDesktop">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat qui nesciunt dolorem dolores, esse sed voluptates pariatur eaque doloribus omnis placeat odit ipsam voluptas saepe labore aut odio nulla?</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateDesktop;
