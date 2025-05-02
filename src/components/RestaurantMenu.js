import { useState } from "react";
import useRestraurantMenu from "../utils/useRestraurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestraurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const itemMenuSource =
    resId.length === 5
      ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card
      : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card;
  console.log(
    "hello",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("cate", categories);

  const { name, avgRating, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = itemMenuSource || {};
  const toggleAccordian = (index) => {
    return setShowIndex(index === showIndex ? null : index);
  };

  return (
    <div>
      <div className="restaurant-list text-center">
        <h1 className="font-bold text-6xl my-10">{name}</h1>
        <h2 className="font-bold text-lg ">{cuisines.join(", ")}</h2>
        {/* Accordian css */}
        {categories.map((category, index) => {
          console.log("cat", category);

          return (
            <RestaurantCategory
              key={category.card.card.categoryId}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => toggleAccordian(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
