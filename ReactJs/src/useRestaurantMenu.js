import { useEffect, useState } from "react";
import { MENU_URL } from "./utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(MENU_URL + resId);
        if (!data.ok) {
          throw new Error('Failed to fetch');
        }
        const json = await data.json();
        setResInfo(json?.data);
      } catch (error) {
        // Handle fetch errors
        console.error('Fetch error:', error);
        // Optionally, set state or handle error display
      }
    };

    fetchData();

    // Cleanup function (optional, depends on use case)
    // return () => {
    //   // Perform cleanup if needed
    // };

  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
