import "./UsersRegisterLogin.css"
import Register from "../fetchUsers/RegisterLogin/Register";
import Login from "../fetchUsers/RegisterLogin/Login";

function UsersRegisterLogin() {

  return ( 
    <>
      <div className="allRegisterLogin">
        <h2 className="titleRegisterLogin">USUARIOS</h2>
        <div className="registerLogin">
          <Register/>
          <Login/>
        </div>
      </div>
    </>
  );
}
  
  export default UsersRegisterLogin;