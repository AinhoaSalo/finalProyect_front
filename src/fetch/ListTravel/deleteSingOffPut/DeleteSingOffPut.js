import { useState, useEffect } from "react";

function Delete() {
  useEffect(()=>{
    if (document.querySelector(".deleteAndPutUserLogin")) {
      document.querySelector("#btnDelete").addEventListener("click", function () {
        let nameUserLogin = sessionStorage.getItem('nameUserLogin');
    
        let user = {
          nameUserLogin,
        };
    
        let data = {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        };
    
        fetch("http://localhost:8000/borrar", data)
          .then(function (res) {
            return res.json();
          })
          .then(function (resp) {
            if (resp.delete == true){
              sessionStorage.removeItem('nameUserLogin');
              alert(resp.message) // TODO: pop up
              window.location.replace("http://localhost:3000/inicio");
            } else {
              document.querySelector("#messageDeletePut").innerHTML = `<p>${resp.message}</p>`;
            }
    
          });
      });
    }
  }, [])
  
  return (
    <>
        <p>Holi, cuidado que te borro</p>
        <div><button id="btnDelete">Borrar usuario</button></div>
    </>
  )
}

function SingOff() {
  if (document.querySelector(".deleteAndPutUserLogin")) {
    document.querySelector("#btnSingOff").addEventListener("click", function () {
      sessionStorage.removeItem('nameUserLogin');
      alert("Sesión cerrada") // TODO: pop up
      window.location.replace("http://localhost:3000");
    });
  }

  return (
    <>
      <p>Holi, cuidado que te modifico</p>
      <div><button id="btnSingOff">Cerrar sesion</button></div>
      <div id="messageDeletePut"></div>
    </>
  )
}

function Put() {
  useEffect(()=>{
    if (document.querySelector(".deleteAndPutUserLogin")) {
      document.querySelector("#btnPut").addEventListener("click", function () {
        let nameRegister = document.querySelector("#name").innerHTML;
        let lastnameRegister = document.querySelector("#lastname").innerHTML;
        document.querySelector("#name").innerHTML = `<input id="nameRegister" type="text" value=${nameRegister}>`;
        document.querySelector("#lastname").innerHTML = `<input id="lastnameRegister" type="text" value=${lastnameRegister}>`;
        document.getElementById("btnModify").className = "show"
        document.getElementById("btnPut").className = "hide"
      });
    
      document.querySelector("#btnModify").addEventListener("click", function () {
        let nameUserRegister = sessionStorage.getItem('nameUserLogin');
        let nameRegister = document.querySelector("#nameRegister").value;
        let lastnameRegister = document.querySelector("#lastnameRegister").value;
    
        let user = {
          nameUserRegister,
          nameRegister,
          lastnameRegister
        };
      
        let data = {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        };
    
        fetch("http://localhost:8000/travel?modificar", data)
        .then(function (res) {
          return res.json();
        })
        .then(function (resp) {
          if (resp.put == true){
            document.getElementById("btnModify").className = "hide"
            document.getElementById("btnPut").className = "show"
            document.querySelector("#name").innerHTML = `${nameRegister}`;
            document.querySelector("#lastname").innerHTML = `${lastnameRegister}`;
            alert(resp.message) // TODO: pop up
          } else {
            document.querySelector("#messageDeletePut").innerHTML = `<p>${resp.message}</p>`;
          }
    
        });
    
      }); 
    }
  }, [])

  return (
    <>
      <p>Holi, cuidado que te cierro sesión</p>
      <div><button id="btnPut" class="show">Modificar datos</button><button id="btnModify" class="hide">Enviar datos</button></div>
    </>
  )
}


          

