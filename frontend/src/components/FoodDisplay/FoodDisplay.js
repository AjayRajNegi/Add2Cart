import "./FoodDisplay.css";
import React, { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { StoreContext } from "../../context/StoreContext";

const firebaseConfig = {
  apiKey: "AIzaSyAbY5XvyshMyC7PZbwh-roJf1705Yjn7kI",
  authDomain: "stanza2cart.firebaseapp.com",
  projectId: "stanza2cart",
  storageBucket: "stanza2cart.firebasestorage.app",
  messagingSenderId: "234021511731",
  appId: "1:234021511731:web:b429c948d090ff2aca7946",
  measurementId: "G-WXEQNF0FEF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display mt-[10px] md:mt-[30px]" id="food-display">
      <h2>Top products near you.</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                offers={item.offers}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
