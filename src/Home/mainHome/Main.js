import PlanningList from "./planningList/PlanningList";
import DestinationsToTravel from "./destinationsToTravel/DestinationsToTravel";
import DescriptionPage from "./descriptionPage/DescriptionPage";

function Main() {
  return ( 
    <>
      <DescriptionPage/>
      <DestinationsToTravel/>
      <PlanningList/>
    </>
  );
}
  
export default Main;