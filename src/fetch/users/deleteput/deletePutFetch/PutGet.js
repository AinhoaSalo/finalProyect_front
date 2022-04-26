import { useState, useEffect } from "react";

function PutGet() {
  let [dataUser, setDataUser] = useState("");
  let [modifyName, setModifyName] = useState("");
  let [modifyLastname, setModifyLastname] = useState("");
  let [isEditing, setIsEditing] = useState(false);

  //get dataUser
  useEffect(()=>{
    fetch("http://localhost:8000/areapersonal?"+ new URLSearchParams({nameUserLogin: sessionStorage.getItem('nameUserLogin'),})) 
    .then(response=>response.json())
    .then(res=>{
      setDataUser(res);
    }) 
  }, [])

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
        <div><button onClick={()=>send()} className="btnDeleteModifySingOff">Enviar datos</button></div>
      </>
    )
  }

  function send(){
    if ((modifyName === "") || (modifyLastname === "")){
      alert("campo vacio, por favor, introduzca el nombre y el apellido")
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
        if (res.put == true){
          alert(res.message)
        } else {
          alert(res.message)
        }
      });
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

export default PutGet;