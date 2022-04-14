import { useState, useEffect } from "react"

function Register() {
  let [body, setBody] = useState([]);
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
            alert(res.message)
            console.log(res)
            setBody(res)
          }) 
    });
  }, []) 

  return(
    <>
          <div className="addUserRegister">
            <h3>Registrate aquí</h3>
            <div><label className="labelInputsRegister">Usuario: </label><input className="nameUserRegisterFront inputRegLog" type="text"/></div>
            <div><label className="labelInputsRegister">Nombre: </label><input className="nameRegisterFront inputRegLog" type="text"  /></div>
            <div><label className="labelInputsRegister">Apellidos: </label><input className="lastnameRegisterFront inputRegLog" type="text"/></div>
            <div><label className="labelInputsRegister">Contraseña: </label><input className="passwordUserRegisterFront inputRegLog" type="password"/></div>
            <div><button className="btnRegister">Registrar</button></div>
            <div className="messageRegistrer"></div>
          </div>
    </>
  )

} 

export default Register; 