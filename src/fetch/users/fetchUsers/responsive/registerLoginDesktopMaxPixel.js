function RegisterLoginDesktopMaxPixel() {
  return(
    <>
      <div className="allRegisterLoginDesktopMaxPixel">
        <h2 className="titleRegisterLogin">USUARIOS</h2>
        <div className="registerLoginDesktopMaxPixel">
          <div className="addUserRegister">
            <h3>Registrate aquí</h3>
            <div><label className="labelInputsRegister">Usuario: </label><input className="nameUserRegisterFront inputRegLogDesktopMaxPixel" type="text"/></div>
            <div><label className="labelInputsRegister">Nombre: </label><input className="nameRegisterFront inputRegLogDesktopMaxPixel" type="text"  /></div>
            <div><label className="labelInputsRegister">Apellidos: </label><input className="lastnameRegisterFront inputRegLogDesktopMaxPixel" type="text"/></div>
            <div><label className="labelInputsRegister">Contraseña: </label><input className="passwordUserRegisterFront inputRegLogDesktopMaxPixel" type="password"/></div>
            <div><button className="btnRegister">Registrar</button></div>
            <div className="messageRegistrer"></div>
          </div>
          <div className="addUserLogin">
            <h3>Conectate aquí</h3>
            <div><label className="labelInputsLogin">Usuario: </label><input className="nameUserLogin inputRegLogDesktopMaxPixel" type="text" /></div>
            <div><label className="labelInputsLogin">Contraseña: </label><input className="passwordUserLogin inputRegLogDesktopMaxPixel" type="password" /></div>
            <div><button className="btnLogin">Conectar</button></div>
            <div className="messageLogin"></div>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default RegisterLoginDesktopMaxPixel;
