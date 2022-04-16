import "./UsersRegisterLogin.css"
import Register from "./RegisterLoginFetch/Register";
import Login from "./RegisterLoginFetch/Login";

function UsersRegisterLogin() {
  return ( 
    <>
      <div className="allRegisterLogin">
        <h2 className="titleRegisterLogin">USUARIOS</h2>
        <div className="registerLogin">
          <div className="registerLoginSoon">
            <div className="registerLoginStyle"><Register/></div>
            <div className="registerLoginStyle"><Login/></div>
          </div>
        </div>
      </div>
    </>
  );
}
  
export default UsersRegisterLogin;