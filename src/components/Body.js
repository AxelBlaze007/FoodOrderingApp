import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fetchRestaurants, setFetchRestaurants] = useState([]);

  console.log("list", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?" +
      "lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const data = await fetch(
      "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(swiggyURL)
    );

    // );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(encodeURIComponent(swiggyURL));
    console.log(decodeURI(encodeURI(swiggyURL)));
    // optional chaining
    setFetchRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return fetchRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter ml-28 flex">
        <div className="search">
          <input
            type="text"
            className="search-box border-2 border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 px-2 py-1 mx-2 hover:bg-blue-700 rounded-sm"
            onClick={() => {
              //filter restro card and Update the UI
              //searchText

              const filteredRestaurants = fetchRestaurants.filter((res) =>
                res.info.name.toLowerCase()?.includes(searchText.toLowerCase())
              );

              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-violet-400 px-2 rounded-sm"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated restaurant
        </button>
        <div className="mx-4">
          <label>UserName :</label>
          <input
            className="px-3 mx-1 border-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
