import React, { useState } from "react";
import Shimmer from "../utils/shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const showItems = useState(true);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);
  const dummy="dummy";
  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info || {};
  const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  console.log(categories);

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{name}</h2>
      <p className="font-bold text-2xl
">{cuisines?.join(", ")}-{costForTwoMessage}</p>
      
      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category?.card?.card} showItems={index==showIndex ? true:false} setShowIndex={()=>setShowIndex(index)} dummy={dummy}/>
       
        
      ))}
     
    </div>
  );
};

export default RestaurantMenu;
