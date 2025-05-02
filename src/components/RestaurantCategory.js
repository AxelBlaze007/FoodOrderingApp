import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log("dafa", data);
  //   const [showItem, useShowItem] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordian header */}
      <div className=" w-6/12 mx-auto  my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between text-2xl cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian body */}
    </div>
  );
};
export default RestaurantCategory;
