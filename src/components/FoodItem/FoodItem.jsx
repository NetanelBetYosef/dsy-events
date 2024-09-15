import React, { useContext } from "react";
import "./FoodItem.css";
import addIconWhite from "../../assets/plusWhite.jpg";
import removeIcon from "../../assets/removeIcon.png";
import addIconGreen from "../../assets/plusGreen.png";
import redMinusIcon from "../../assets/redMinusIcon.png";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, extra }) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => {
              addToCart(id);
            }}
            src={addIconWhite}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
            className="remove-icon-red"
              onClick={() => {
                removeFromCart(id);
              }}
              src={redMinusIcon}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
            className="add-icon-green"
              onClick={() => {
                addToCart(id);
              }}
              src={addIconGreen}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-desc">{extra}</p>
        <p className="food-item-price">₪ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
