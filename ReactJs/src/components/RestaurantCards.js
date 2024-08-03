import { CDN_LOGO } from "../utils/constants";
import React,{useContext} from "react";
import userContext from "../utils/userContext"; 

const RestaurantCards = (props) => {
  const { resData } = props;
  const { loggedInUser }=useContext(userContext);
  const { cloudinaryImageId, name, cuisines, avgRating, sla ={} } = resData.info || {};

  return (
    <div className=' m-4 p-4 w-[250px] h-auto rounded-lg bg-gray-100 hover:bg-gray-200 '>
      <div className='res-logo'>
        <img className="h-[250px] rounded-lg" src={CDN_LOGO + (cloudinaryImageId || '')} alt="Restaurant Logo" style={{ width: "100%" }} />
      </div>
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h4>Cuisines: {cuisines ? cuisines.join(", ") : "N/A"}</h4>
      <h4>Average Rating: {avgRating || "N/A"}</h4>
      <h4>Delivery Time: {sla.deliveryTime ? sla.deliveryTime + " mins" : "N/A"}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCards;