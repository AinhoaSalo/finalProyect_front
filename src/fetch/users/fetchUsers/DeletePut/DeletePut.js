import "./DeletePut.css"
import { useState, useEffect } from "react";

function DeletePut() {
  let [userDelete, setUserDelete] = useState([]);
  let [userPut, setUserPut] = useState([]);
  let [executeDelete, setExecuteDelete] = useState(false);
  let [executePut, setExecutePut] = useState(false);


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
    if (true) {
      fetch("http://localhost:8000/areapersonal?"+ new URLSearchParams({nameUserLogin: sessionStorage.getItem('nameUserLogin'),})) 
      .then(response=>response.json())
      .then(res=>{
        console.log(res)
        let name = res.nameRegister;
        let lastname = res.lastnameRegister;
        document.querySelector(".dataUserLogin").innerHTML = `<div className="personalArea"><div className="namePersonalArea"><p>Nombre: <span className="name">${name}</span></p></div><div className="lastnamePersonalArea"><p>Apellidos: <span className="lastname">${lastname}</span></p></div>`; 
      }) 
    }
    
  }, [])

  //delete user
  useEffect(()=>{
    if (executeDelete) {
      if (document.querySelector(".deleteAndPutUserLogin")) {
        document.querySelector(".btnDelete").addEventListener("click", function () {
          let nameUserLogin = sessionStorage.getItem('nameUserLogin');
      
          userDelete = {
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
                window.location.replace("http://localhost:3000/inicio");
                setUserDelete(res)
                setExecuteDelete(false)
              } else {
                console.log(res)
              }
            });
        });
      }
    }
    
  }, [executeDelete])

  //Put user
  useEffect(()=>{
    if (executePut) {
      if (document.querySelector(".deleteAndPutUserLogin")) {
        document.querySelector(".btnPut").addEventListener("click", function () {
          let nameRegister = document.querySelector(".name").innerHTML;
          let lastnameRegister = document.querySelector(".lastname").innerHTML;
          document.querySelector(".name").innerHTML = `<input className="nameRegister" type="text" value=${nameRegister}>`;
          document.querySelector(".lastname").innerHTML = `<input className="lastnameRegister" type="text" value=${lastnameRegister}>`;
          document.querySelector(".btnModify").className = "show"
          document.querySelector(".btnPut").className = "hide"
        });
      
        document.querySelector(".btnModify").addEventListener("click", function () {
          let nameUserRegister = sessionStorage.getItem('nameUserLogin');
          let nameRegister = document.querySelector(".nameRegister").value;
          let lastnameRegister = document.querySelector(".lastnameRegister").value;
      
          userPut = {
            nameUserRegister,
            nameRegister,
            lastnameRegister
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
              document.querySelector(".btnModify").className = "hide"
              document.querySelector(".btnPut").className = "show"
              document.querySelector(".name").innerHTML = `${nameRegister}`;
              document.querySelector(".lastname").innerHTML = `${lastnameRegister}`;
              setUserPut(res)
              setExecutePut(false)
            } else {
              console.log(res)
            }
      
          });
      
        }); 
      }
    }
  }, [executePut])
  
  return (
    <>
      <div className='allAreaUsers'>
      <div className="allUserLogin">
        <div className="dataUserLogin"></div>
        <div className="deleteAndPutUserLogin">
          <div><button onClick={()=>setExecuteDelete(true)} className="btnDelete">Borrar usuario</button></div>
          <div><button onClick={()=>setExecutePut(true)} className="btnPut show">Modificar datos</button><button className="btnModify hide">Enviar datos</button></div>
          <div><button className="btnSingOff">Cerrar sesion</button></div>
          <div className="messageDeletePut"></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default DeletePut;

          

