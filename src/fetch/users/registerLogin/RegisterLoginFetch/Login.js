import { useState } from "react"
import swal from 'sweetalert';


function Login() {
  let [bodyLogin, setBodyLogin] = useState([]);
  let [nameUserLogin, setNameUserLogin] = useState("");
  let [passwordUserLogin, setPasswordUserLogin] = useState("");

  function sendDataUserLogin() {
    bodyLogin = {
      nameUserLogin,
      passwordUserLogin
    };

    let data = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyLogin),
    };

    fetch("http://localhost:8000/conectar", data)
    .then(response=>response.json())
    .then(res => { 
      if (res.login == true){
        sessionStorage.setItem('nameUserLogin', nameUserLogin);
        window.location.replace("http://localhost:3000/listascreadas");
        swal(res.message)
        setBodyLogin(res)
      } else {
        swal(res.message)
      }
    });
  }

  return(
    <>
      <div className="addUserLogin">
        <h3>Conectate aquí</h3>
        <div><label className="labelInputsLogin">Usuario: </label><input className="nameUserLogin inputRegLog" type="text" onChange={e=>setNameUserLogin(e.target.value)} value={nameUserLogin}/></div>
        <div><label className="labelInputsLogin">Contraseña: </label><input className="passwordUserLogin inputRegLog" type="password" onChange={e=>setPasswordUserLogin(e.target.value)} value={passwordUserLogin}/></div>
        <div><button onClick={()=>sendDataUserLogin()} className="btnRegisterLogin">Conectar</button></div>
        <div className="messageLogin"></div>
      </div>
    </>
  )

} 

export default Login; 