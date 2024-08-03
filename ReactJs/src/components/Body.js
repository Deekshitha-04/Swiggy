import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "../utils/shimmer";
import useOnlineStatus from "../useOnlineStatus";
// import resList from "../utils/mockdata"; // No need for mockdata if fetching real data

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch restaurant data. Please try again later.");
    }
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.5
    );
    setFilteredRestaurant(filteredList);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  const onlineStatus = useOnlineStatus();

  if(onlineStatus===false){
    return <h1>You are offline</h1>
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="p-4 m-4 ">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>Search</button>
       
        <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant, index) => (
          <Link key={index} to={"/restaurant/"+restaurant?.info?.id || {}}>
            {/* add label if it is promoted */}
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
