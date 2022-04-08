import FetchRegister from "./fetchUsers/FetchRegisterLogin";
import objetUsers from "../objets/objetUsers";
import { useState } from "react";

function Users() {
  let [allUser, setAllUser] = useState(objetUsers);

  return ( 
    <>
      <FetchRegister allUser={allUser} setAllUser={setAllUser}/>
    </>
  );
}
  
  export default Users;