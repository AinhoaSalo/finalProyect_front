import "./UserArea.css"
import PutGet from "./deletePutFetch/PutGet";
import Delete from "./deletePutFetch/Delete";
import SingOff from "./deletePutFetch/SingOff";
import LinksPlanning from "../../ListTravel/linksPlanning/LinksPlanning";

function UserArea() {
  let user = sessionStorage.getItem('nameUserLogin');
  let isLogged = false;
  if (user != null) {
    isLogged = true;
  }
  function redirect(){
    window.location.replace("http://localhost:3000/registro");
  }

  function renderPage() {
    return (
      <>
        <main>
          <div className='allAreaUsers'>
            <LinksPlanning/>
            <div className="allUserLogin">
              <div className="deleteSingOffAndPutUserLogin">
                <PutGet/>
                <Delete/>
                <SingOff/>
                <div className="messageDeletePut"></div>
              </div>
            </div>
          </div>
        </main>
      </>
    )
  }
  return (
    isLogged ? renderPage() : redirect()
  )
}

export default UserArea;

          

