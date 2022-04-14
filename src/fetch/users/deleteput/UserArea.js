import "./UserArea.css"
import PutGet from "./deletePutFetch/PutGet";
import Delete from "./deletePutFetch/Delete";
import SingOff from "./deletePutFetch/SingOff";

function UserArea() {
  
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

export default UserArea;

          

