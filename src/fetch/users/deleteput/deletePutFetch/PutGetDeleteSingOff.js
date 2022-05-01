import { useState, useEffect } from "react";
import swal from 'sweetalert';

function PutGetDeleteSingOff() {
  let [dataUser, setDataUser] = useState("");
  let [modifyName, setModifyName] = useState("");
  let [modifyLastname, setModifyLastname] = useState("");
  let [isEditing, setIsEditing] = useState(false);

  //get
  useEffect(()=>{
    fetch("http://localhost:8000/areapersonal?"+ new URLSearchParams({nameUserLogin: sessionStorage.getItem('nameUserLogin'),})) 
    .then(response=>response.json())
    .then(res=>{
      setDataUser(res);
    }) 
  }, [])

  //SingOff
  function singOffButton() {
    sessionStorage.removeItem('nameUserLogin');
    swal("Sesión cerrada")
    .then(() => {
      window.location.replace("http://localhost:3000");
    }); 
  }

  //Delete
  function deleteUser() {
    let nameUserLogin = sessionStorage.getItem('nameUserLogin');

    let userDelete = {
      nameUserLogin,
    };

    let data = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDelete),
    };

    fetch("http://localhost:8000/borrar", data)
    .then(response=>response.json())
    .then(function (res) {
      if (res.delete === true){
        sessionStorage.removeItem('nameUserLogin');
        swal(res.message).then(() => {
          window.location.replace("http://localhost:3000/inicio");
        });
        
      } else {
        swal(res.message)
      }
    });
  }

  //Put
  function renderModify() {
    
    return(
      <>
        <div className="inputRenderModify">
          <div className="nameAndLastnamePersonalArea">
            <p>Nombre: <input className="inputsModify" type="text"onChange={e=>setModifyName(e.target.value)} value={modifyName}></input></p>
            <p>Apellidos: <input className="inputsModify" type="text" onChange={e=>setModifyLastname(e.target.value)} value={modifyLastname}></input></p>
          </div>
          <div className="allButtonUserArea">
            <button onClick={()=>send()} className="btnDeleteModifySingOff">Enviar datos</button>
            <button onClick={()=>deleteUser()} className="btnDeleteModifySingOff">Borrar usuario</button>
            <button onClick={()=>singOffButton()} className="btnDeleteModifySingOff">Cerrar sesion</button>
          </div>
        </div>
      </>
    )
  }

  function send(){
    if ((modifyName === "") || (modifyLastname === "")){
      swal("Campo vacio, por favor, introduzca el nombre y el apellido")
    }else{
      setIsEditing(false);
      setDataUser({nameRegister: modifyName,lastnameRegister: modifyLastname})
      let userPut = {
        nameUserRegister: sessionStorage.getItem('nameUserLogin'),
        nameRegister: modifyName,
        lastnameRegister: modifyLastname
      };
    
      let data = {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userPut),
      };
  
      fetch("http://localhost:8000/modificar", data)
      .then(response=>response.json())
      .then(function (res) {
        if (res.put === true){
          swal(res.message)
        } else {
          swal(res.message)
        }
      });
      setModifyName("")
      setModifyLastname("")
    }
  }

  function renderFields() {
    return(
      <>
        <div className="allStyleModify">
          <div className="styleInputs">
            <div className="namePersonalArea">
              <p>Nombre: <span className="name">{dataUser.nameRegister}</span></p>
            </div>
            <div className="lastnamePersonalArea">
              <p>Apellidos: <span className="lastname">{dataUser.lastnameRegister}</span></p>
            </div>
          </div>
          <div className="styleButton">
            <button onClick={()=>setIsEditing(true)} className="btnDeleteModifySingOff">Modificar datos</button>
            <button onClick={()=>deleteUser()} className="btnDeleteModifySingOff">Borrar usuario</button>
            <button onClick={()=>singOffButton()} className="btnDeleteModifySingOff">Cerrar sesion</button>
          </div>
        </div>
      </>
    )
  }
  return(
    <>
      <div className="personalArea">
        { isEditing ? renderModify() : renderFields() }
      </div>
    </>

  )
}

export default PutGetDeleteSingOff;