import { LOGO_URL } from "../utils/constants";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  const [btnName, setBtnName] = useState("LOGIN");

  useEffect(() => {
    console.log("useEffect");
  }, [btnName]);

  const cartItems=useSelector((store)=>store.cart.items);

  return ( 
    <div className="flex justify-between bg-blue-100 shadow-lg mb-2 px-0">
      <div className="logo">
        <img className="w-1/5 bg-pink-100" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex  ">
          <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-4 font-bold text-l"><Link to="/Grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-l"><Link to="/">Home</Link></li>
          <li className="px-4 font-bold text-l"><Link to="/about">About</Link></li>
          <li className="px-4 font-bold text-l"><Link to="/contact"></Link>Contact</li>
          <li className="px-4 font-bold text-l"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <button
            className="px-2 font-bold text-l"
            onClick={() => {
              setBtnName(btnName === "LOGIN" ? "LOGOUT" : "LOGIN");
              // Implement logout logic here.
            }}
          >
            {btnName}
          </button>
          <li className="px-4"></li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
