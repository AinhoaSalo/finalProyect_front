import "./FetchRegisterLogin.css"
import { useState, useEffect } from "react"
import RegisterLoginSmartPhone from "./responsive/registerLoginSmartPhone";
import RegisterLoginMobile from "./responsive/registerLoginMobile";
import RegisterLoginDesktop from "./responsive/registerLoginDesktop";
import RegisterLoginDesktopMaxPixel from "./responsive/registerLoginDesktopMaxPixel";



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
      <RegisterLoginSmartPhone/>
      <RegisterLoginMobile/>
      <RegisterLoginDesktop/>
      <RegisterLoginDesktopMaxPixel/>
    </>
  )

} 

export default FetchRegister; 