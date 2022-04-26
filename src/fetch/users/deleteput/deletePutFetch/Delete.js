import { useState, useEffect } from "react";

function Delete() {
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
        alert(res.message)
      }
    });

  }
  return(
      <>
        <div><button onClick={()=>deleteUser()} className="btnDeleteModifySingOff">Borrar usuario</button></div>
      </>
  )
}

export default Delete;