import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <>
    <div className="food-display" id="food-display">
      <h2>המנות שלנו</h2>
      <h3>הוסיפו מנות לעגלה ולאחר מכן שלחו לקבלת הצעת מחיר אטרקטיבית במיוחד</h3>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category==="All" || category===item.category) {
            return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              extra={item.extra}
            /> 
         );
        }
        })}
      </div>
    </div>
    <hr />
    <h1>שילוב מושלם של אווירה וטעם</h1>
    </>
  );
};

export default FoodDisplay;
