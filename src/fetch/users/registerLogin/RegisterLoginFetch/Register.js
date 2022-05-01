import { useState, useEffect} from "react"
import swal from 'sweetalert';

function Register() {
  let body= [];
  let [nameUserRegister, setNameUserRegister] = useState("");
  let [nameRegister, setNameRegister] = useState("");
  let [lastnameRegister, setLastnameRegister] = useState("");
  let [passwordUserRegister, setPasswordUserRegister] = useState("");

  
  useEffect(()=>{
    renderRegister()
  }, [])

  function sendDataUserRegister() {
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
      swal(res.message)
      setNameUserRegister("")
      setNameRegister("")
      setLastnameRegister("")
      setPasswordUserRegister("")
    }) 
  }

  function renderRegister(){
    return(
      <>
      <div className="addUserRegister">
        <h3>Registrate aquí</h3>
        <div><label className="labelInputsRegister">Usuario: </label><input className="nameUserRegisterFront inputRegLog" type="text" onChange={e=>setNameUserRegister(e.target.value)} value={nameUserRegister}/></div>
        <div><label className="labelInputsRegister">Nombre: </label><input className="nameRegisterFront inputRegLog" type="text" onChange={e=>setNameRegister(e.target.value)} value={nameRegister}/></div>
        <div><label className="labelInputsRegister">Apellidos: </label><input className="lastnameRegisterFront inputRegLog" type="text" onChange={e=>setLastnameRegister(e.target.value)} value={lastnameRegister}/></div>
        <div><label className="labelInputsRegister">Contraseña: </label><input className="passwordUserRegisterFront inputRegLog" type="password" onChange={e=>setPasswordUserRegister(e.target.value)} value={passwordUserRegister}/></div>
        <div className="flexButtonRegisterLogin"><button onClick={()=>sendDataUserRegister()} className="btnRegisterLogin">Registrar</button></div>
        <div className="messageRegistrer"></div>
      </div>
    </>
    )
  }

  return(
    renderRegister()
  )

} 

export default Register; 