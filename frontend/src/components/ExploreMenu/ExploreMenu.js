import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-0 mt-5" id="explore-menu">
      <h1 className="text-4xl font-medium text-gray-900">Explore our menu.</h1>
      <p className="max-w-[100%] text-gray-500 md:max-w-full text-base mt-2 md:mt-4 md:mb-3">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-7 text-center md:mb-3 overflow-x-scroll ">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                className={`w-[7.5vw] min-w-[80px] rounded-full transition duration-200 ${
                  category === item.menu_name
                    ? "border-4 border-tomato p-0.5"
                    : ""
                }
                `}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className="mt-2 text-gray-500 text-lg md:text-sm">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 h-0.5 bg-gray-200 border-none" />
    </div>
  );
};

export default ExploreMenu;
