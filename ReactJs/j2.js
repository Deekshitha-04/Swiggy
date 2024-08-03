import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Regions from "./Regions";

const App = () => {
  const [data,setData]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(Regions);
      } catch (error) {
        console.log("Data fetch failed:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="cities">
      <label htmlFor="countries">Choose a country:</label>
      <select name="countries" id="countries" onChange={()=>{
        const coun=(event.target.value).toLowerCase();
        console.log(coun);
        const d=data.map((con)=>{
        if((con.country).toLowerCase()===coun){
             setData(con);
          }else{
            console.log(data);
            setData([]);
            console.log("hi");
            console.log(data);
          }
        });
      }}>
       
        <option value="USA">USA</option>
        <option value="CANADA">Canada</option>
        <option value="UK">UK</option>
        <option value="AUSTRALIA">Australia</option>
        <option value="GERMANY">Germany</option>
      </select>
      <button type="submit" onClick={()=>{

      
        
      }}> onSubmit</button>

    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
