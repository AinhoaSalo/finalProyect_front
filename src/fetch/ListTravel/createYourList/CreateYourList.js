import "./CreateYourList.css"
import CreateSmartPhone from "./createSmartPhone/CreateSmartPhone";
import CreateMobile from "./createMobile/CreateMobile";
import CreateDesktop from "./createDesktop/CreateDesktop";
import CreateDesktopMaxPixel from "./createDesktopMaxPixel/CreateDesktopMaxPixel";

function CreateYourList() {

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
