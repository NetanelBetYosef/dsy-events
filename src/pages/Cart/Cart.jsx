import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import removeIcon from '../../assets/removeIcon.png';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (Object.keys(cartItems).length > 0) {
      navigate('/order');
    } else {
      alert('העגלה ריקה! הוסף פריטים לעגלה כדי להתקדם.');
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title cart-title-hiden" >
          <p>פריט</p>
          <p>שם</p>
          <p>מחיר</p>
          <p>כמות</p>
          <p>סה"כ</p>
          <p>מחיקה</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img className="item-img" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p style={{color: 'green', fontSize: '14px'}}>₪ {item.price}</p>
                  <p style={{fontSize: '22px'}}>{cartItems[item._id]}</p>
                  <p style={{color: 'green', fontSize: '14px'}}>₪ {item.price * cartItems[item._id]}</p>
                  <img src={removeIcon} className="cross" onClick={() => removeFromCart(item._id)} />
                </div>
                <hr />
              </div>
            );
          }
          return null; // Ensure you return null if no items match the condition
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>מחיר העגלה</h2>
          <div>
            <div className="cart-total-details">
              <p>₪ {getTotalCartAmount()}</p>
              <p>סה"כ</p>
            </div>
            <hr />
          </div>
          <button onClick={handleNavigation}>שלחו בקשה להצעת מחיר</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
