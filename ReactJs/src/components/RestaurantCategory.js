import React, { useState } from 'react';
import ItemList from './ItemList';


// it is controlled component becoz it is depending on showItems

const RestaurantCategory = ({ data,showItems,setShowIndex,dummy}) => {
  const itemCards = data?.itemCards || [];
  console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  

  return (
    <div>
      <div className='w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 flex flex-col'>
        <div className='flex justify-between items-center mb-4 cursor-pointer' >
          <div className='flex items-center' onClick={handleClick}>
            <span className='font-bold text-lg' >{data?.title} ({itemCards.length})</span>
            <span className='ml-2'>⬇️</span>
          </div>
        </div>
        <div className='w-full'>
         {showItems && < ItemList items={itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
