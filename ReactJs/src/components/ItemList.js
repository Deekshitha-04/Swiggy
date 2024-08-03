import React from "react";
import { ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {

const dispatch=useDispatch();

  const handleItem = (item) =>{
    //dispatch an action
    dispatch(addItem(item))

  }
  return (
    <div className="">
      {items.map(item => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="flex-grow">
            <div className="font-semibold">{item.card.info.name}</div>
            <div className="text-gray-500">
              ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-xs text-gray-600 mt-1">{item.card.info.description}</p>
          </div>
          <div className="relative w-24 h-24 ml-4 flex items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src={ITEM_URL + (item?.card?.info?.imageId || 'defaultImageId')}
              alt={item.card.info.name}
            />
            <button
              className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-1 py-1 rounded"
              
            onClick={()=>handleItem(item)
              //dispatch action

            }>
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
