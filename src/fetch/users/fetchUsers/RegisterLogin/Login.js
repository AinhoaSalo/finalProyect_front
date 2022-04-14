import { useState, useEffect } from "react"

function Login() {
  let [bodyLogin, setBodyLogin] = useState([]);
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
              alert(res.message)
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
      <div className="addUserLogin">
        <h3>Conectate aquí</h3>
        <div><label className="labelInputsLogin">Usuario: </label><input className="nameUserLogin inputRegLog" type="text" /></div>
        <div><label className="labelInputsLogin">Contraseña: </label><input className="passwordUserLogin inputRegLog" type="password" /></div>
        <div><button className="btnLogin">Conectar</button></div>
        <div className="messageLogin"></div>
      </div>
    </>
  )

} 

export default Login; 