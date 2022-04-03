import "./CreateYourList.css"
import CreateSmartPhone from "./createSmartPhone/CreateSmartPhone";
import CreateMobile from "./createMobile/CreateMobile";
import CreateDesktop from "./createDesktop/CreateDesktop";
import CreateDesktopMaxPixel from "./createDesktopMaxPixel/CreateDesktopMaxPixel";




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
      <CreateSmartPhone/>
      <CreateMobile/>
      <CreateDesktop/>
      <CreateDesktopMaxPixel/>
    </>
  );
}

export default CreateYourList;
