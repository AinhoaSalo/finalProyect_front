import "./UserArea.css"
import PutGet from "./deletePutFetch/PutGet";
import Delete from "./deletePutFetch/Delete";
import SingOff from "./deletePutFetch/SingOff";

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
        <div className='allAreaUsers'>
          <div className="allUserLogin">
            <div className="dataUserLogin">
              <PutGet/>
            </div>
            <div className="deleteSingOffAndPutUserLogin">
              <Delete/>
              <SingOff/>
              <div className="messageDeletePut"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    isLogged ? renderPage() : redirect()
  )
}

export default UserArea;

          

