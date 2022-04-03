import "./CreateYourList.css"
import CreateSmartPhone from "./createSmartPhone/CreateSmartPhone";
import CreateMobile from "./createMobile/CreateMobile";
import CreateDesktop from "./createDesktop/CreateDesktop";
import CreateDesktopMaxPixel from "./createDesktopMaxPixel/CreateDesktopMaxPixel";
import { useState } from "react";
import objetTravel from "./objetList/objetTravel";




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
