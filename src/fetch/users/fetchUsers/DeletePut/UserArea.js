import "./DeletePut.css"
import { useState, useEffect } from "react";

function UserArea() {
  let [dataUser, setDataUser] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let [modifyName, setModifyName] = useState("");
  let [modifyLastname, setModifyLastname] = useState("");



  //singOff
  if (document.querySelector(".deleteAndPutUserLogin")) {
    document.querySelector(".btnSingOff").addEventListener("click", function () {
    sessionStorage.removeItem('nameUserLogin');
    alert("Sesión cerrada") // TODO: pop up
    window.location.replace("http://localhost:3000");
    });
  }

  //get dataUser
  useEffect(()=>{
    fetch("http://localhost:8000/areapersonal?"+ new URLSearchParams({nameUserLogin: sessionStorage.getItem('nameUserLogin'),})) 
    .then(response=>response.json())
    .then(res=>{
      setDataUser(res);
    }) 

  }, [])

  //delete user
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
      if (res.delete == true){
        sessionStorage.removeItem('nameUserLogin');
        alert(res.message)
        window.location.replace("http://localhost:3000/inicio");
      } else {
        console.log(res)
        alert(res.message)
      }
    });

  }


  //Put user
  function renderModify() {
    
    return(
      <>
        <div className="namePersonalArea">
          <p>Nombre: <input className="name" type="text"onChange={e=>setModifyName(e.target.value)} value={modifyName}></input></p>
        </div>
        <div className="lastnamePersonalArea">
          <p>Apellidos: <input className="lastname" type="text" onChange={e=>setModifyLastname(e.target.value)} value={modifyLastname}></input></p>
        </div>
        <div><button onClick={()=>send()} className="btnModify">Enviar datos</button></div>
      </>
    )
  }

  function send(){
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
      if (res.put == true){
        alert(res.message)
      } else {
        alert(res.message)
      }
    });
  }

  function renderFields() {
    return(
      <>
        <div className="namePersonalArea">
          <p>Nombre: <span className="name">{dataUser.nameRegister}</span></p>
        </div>
        <div className="lastnamePersonalArea">
          <p>Apellidos: <span className="lastname">{dataUser.lastnameRegister}</span></p>
        </div>
        <div><button onClick={()=>setIsEditing(true)} className="btnPut">Modificar datos</button>
        </div>
      </>
    )
  }
  
  return (
    <>
      <div className='allAreaUsers'>
        <div className="allUserLogin">
          <div className="dataUserLogin">
            <div className="personalArea">
              { isEditing ? renderModify() : renderFields() }
            </div>
          </div>
          <div className="deleteAndPutUserLogin">
            <div><button onClick={()=>deleteUser()} className="btnDelete">Borrar usuario</button></div>

            <div><button className="btnSingOff">Cerrar sesion</button></div>
            <div className="messageDeletePut"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserArea;

          

