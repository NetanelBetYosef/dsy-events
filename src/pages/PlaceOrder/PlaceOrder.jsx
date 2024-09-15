import React, { useContext, useRef, useEffect } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import emailjs from 'emailjs-com';

const PlaceOrder = () => {
  const form = useRef();
  const { getTotalCartAmount, cartItems, food_list } = useContext(StoreContext);

  const getProductNamesAndQuantities = () => {
    if (typeof cartItems !== 'object' || cartItems === null) {
      console.error("cartItems is not an object:", cartItems);
      return "";
    }

    const productDetails = Object.keys(cartItems)
      .filter(itemId => cartItems[itemId] > 0)
      .map(itemId => {
        const product = food_list.find(product => product._id === itemId);
        return product ? `${product.name} - ${cartItems[itemId]} יח` : 'Unknown product';
      });

    // Join product details with HTML <br> for line breaks
    return productDetails.join('  ,');
  };

  const saveFormData = () => {
    const formData = {
      user_fname: form.current.user_fname.value,
      user_lname: form.current.user_lname.value,
      user_email: form.current.user_email.value,
      user_phone: form.current.user_phone.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const loadFormData = () => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      const { user_fname, user_lname, user_email, user_phone } = JSON.parse(savedFormData);
      form.current.user_fname.value = user_fname || '';
      form.current.user_lname.value = user_lname || '';
      form.current.user_email.value = user_email || '';
      form.current.user_phone.value = user_phone || '';
    }
  };

  useEffect(() => {
    loadFormData();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    form.current.total_amount.value = getTotalCartAmount();
    form.current.product_names.value = getProductNamesAndQuantities();  // Updated function

    saveFormData();

    console.log('Sending email with form data:', form.current);

    emailjs.sendForm('service_wrs1ccg', 'template_2neoyv9', form.current, 'lc9RQx_pZ_9wqhIv6')
      .then((result) => {
        console.log('Success:', result.text);
        alert('הצעת מחיר נשלחה בהצלחה !');
      }, (error) => {
        console.error('Error:', error);
        alert('בעיה בשליחת הטופס אנא נסה שנית מאוחר יותר');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="place-order">
      <div className="place-order-left">
        <p className="title">הכניסו פרטים אישיים</p>
        <div className="multi-fields">
          <input type="text" name="user_lname" placeholder="שם משפחה" required />
          <input type="text" name="user_fname" placeholder="שם פרטי" required />
        </div>
        <input type="email" name="user_email" placeholder="כתובת אימייל" required />
        <input type="number" name="user_phone" placeholder="מספר טלפון נייד" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>מחיר העגלה</h2>
          <div>
            <div className="cart-total-details">
              <p>₪ {getTotalCartAmount()}</p>
              <p>סה"כ</p>
            </div>
            <hr />
          </div>
          <div className="more-details">
            <p>אישור הזמנה עד יומיים מראש</p>
            <p>ביטול הזמנה עד 7 ימי עסקים ללא חיוב</p>
            <p>ביטול עד 72 שעות לפני מועד האירוע יחוייב בתשלום של 50% מסך ההזמנה</p>
            <p>ביטול פחות מ72 שעות לפני מועד האירוע יחויב תשלום מלר</p>
            <p>כשרות - כשר למהדרין רבנות ירושלים</p>
          </div>
          <button type="submit">שלחו בקשה</button>
        </div>
      </div>
      <input type="hidden" name="total_amount" value={getTotalCartAmount()} />
      <input type="hidden" name="product_names" value={getProductNamesAndQuantities()} />
    </form>
  );
};

export default PlaceOrder;
