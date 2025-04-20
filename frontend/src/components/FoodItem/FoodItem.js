import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, offers }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="w-full mx-auto rounded-lg shadow-md transition duration-300 animate-fadeIn p-1">
      <div className="relative">
        <div className="object-contain flex items-center justify-center overflow-hidden mx-auto">
          <img
            className="max-h-[150px] max-w-[150px]"
            src={image}
            alt="food_img"
            loading="lazy"
          />
        </div>

        {!cartItems[id] ? (
          <img
            className="w-7 absolute bottom-0 right-4 cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="+"
          />
        ) : (
          <div className="absolute bottom-0 right-4 flex items-center gap-2 p-1 rounded-full bg-white">
            <img
              className="w-7 cursor-pointer"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="-"
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-7 cursor-pointer"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="+"
            />
          </div>
        )}
      </div>
      <div className="p-1 ">
        <div className="flex justify-between items-center mb-0">
          <p className="md:text-lg text-md font-medium tracking-tight">
            {name}
          </p>
          {/* <img className="w-16" src={assets.rating_starts} alt="ratings" /> */}
        </div>
        <p className="text-gray-500 text-xs md:text-sm">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-tomato text-xl text-red-500 font-medium">
            ₹{price}
          </p>
          {offers > 0 && <p className="text-green-500">{offers}% OFF</p>}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
