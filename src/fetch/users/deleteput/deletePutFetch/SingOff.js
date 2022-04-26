function SingOff() {
  function singOffButton() {
    sessionStorage.removeItem('nameUserLogin');
    alert("Sesión cerrada") // TODO: pop up
    window.location.replace("http://localhost:3000");
  }
  
  return(
    <>    
      <div>
        <button onClick={()=>singOffButton()} className="btnDeleteModifySingOff">Cerrar sesion</button>
      </div>
    </>
  )
}
  
export default SingOff;