import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("he", items);

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="flex p-2 m-2  border-b-black border-b-2 justify-between"
          >
            <div
              key={item?.card?.info?.id}
              className=" text-left text-wrap w-2/3 "
            >
              <div className="p-2">
                <span className="font-bold ">{item?.card?.info?.name}</span>
                <span className="font-bold px-2">
                  - $
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <div className="whitespace-pre-wrap break-words ">
                {" "}
                {item?.card?.info?.description}
              </div>
            </div>
            <div>
              <button className="border-1 p-2 bg-black text-white shadow-lg absolute m-auto hover:bg-green-400 rounded-lg hover:text-black">
                Add +{" "}
              </button>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-46 rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
