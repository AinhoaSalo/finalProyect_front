import "./FetchRegisterLogin.css"
import { useState, useEffect } from "react"


function FetchRegister() {
  let [body, setBody] = useState([]);
  let [bodyLogin, setBodyLogin] = useState([]);
  
  useEffect(()=>{
    document.querySelector(".btnRegister").addEventListener("click", function () {
      let nameUserRegister = document.querySelector(".nameUserRegisterFront").value;
      let nameRegister = document.querySelector(".nameRegisterFront").value;
      let lastnameRegister = document.querySelector(".lastnameRegisterFront").value;
      let passwordUserRegister = document.querySelector(".passwordUserRegisterFront").value;

      body = {
        nameUserRegister,
        nameRegister,
        lastnameRegister,
        passwordUserRegister
      };
      
      let data = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      };
    
      fetch("http://localhost:8000/registro", data)
          .then(response=>response.json())
          .then(res=>{
            console.log(res)
            setBody(res)
          }) 
    });
  }, [])

  useEffect(()=>{
    
    if (document.querySelector(".addUserLogin")) {
      document.querySelector(".btnLogin").addEventListener("click", function () {
        let nameUserLogin = document.querySelector(".nameUserLogin").value;
        let passwordUserLogin = document.querySelector(".passwordUserLogin").value;
        
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
              setBodyLogin(res)
            } else {
              console.log(res)
            }
          });
      });
    }
    
  }, [])

  return(
    <>
    <div className="allRegisterLogin">
      <h2 className="titleAllRegisterUser">Usuarios</h2>
      <div className="RegisterLogin">
        <div className="addUserRegister">
          <h3>Registrate aquí</h3>
          <div><label className="labelInputsRegister">Usuario: </label><input className="nameUserRegisterFront inputRegLog" type="text"/></div>
          <div><label className="labelInputsRegister">Nombre: </label><input className="nameRegisterFront inputRegLog" type="text"  /></div>
          <div><label className="labelInputsRegister">Apellidos: </label><input className="lastnameRegisterFront inputRegLog" type="text"/></div>
          <div><label className="labelInputsRegister">Contraseña: </label><input className="passwordUserRegisterFront inputRegLog" type="password"/></div>
          <div><button className="btnRegister">Registrar</button></div>
          <div className="messageRegistrer"></div>
        </div>
        <div className="addUserLogin">
          <h3>Conectate aquí</h3>
          <div><label className="labelInputsLogin">Usuario: </label><input className="nameUserLogin inputRegLog" type="text" /></div>
          <div><label className="labelInputsLogin">Contraseña: </label><input className="passwordUserLogin inputRegLog" type="password" /></div>
          <div><button className="btnLogin">Conectar</button></div>
          <div className="messageLogin"></div>
        </div>
      </div>
    </div>
    </>
  )

} 

export default FetchRegister; 