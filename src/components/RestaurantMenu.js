import useRestraurantMenu from "../utils/useRestraurantMenu.js";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
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
  const { name, avgRating, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = itemMenuSource || {};

  return (
    <div>
      <div className="restaurant-list">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} {"-Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
        <h4>4.3</h4>
      </div>
    </div>
  );
};

export default RestaurantMenu;
