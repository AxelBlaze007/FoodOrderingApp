import { useEffect, useState } from "react";
const useRestraurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);
  const fetchMenu = async () => {
    const swiggyURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=${resId}`;
    const data = await fetch(
      "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(swiggyURL)
    );
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestraurantMenu;
