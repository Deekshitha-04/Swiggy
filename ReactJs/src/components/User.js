import React from "react";
import { useState } from "react";
const User = () =>{
  const [count] = useState(0);
  useEffect(() => {
    //API CALLS


  },[]);

  async function getUserInfo(){
  
  }
  return <div className="user-card m-4 p-4 bg-green-50 rounded-lg border border-solid border-black">
    <h2>Name: Deekshitha</h2>
    <h2>Email: pendeladeekshitha123@gmail.com</h2>
    <h2>Phone: 9398168654</h2>
  </div>
}
export default  User;