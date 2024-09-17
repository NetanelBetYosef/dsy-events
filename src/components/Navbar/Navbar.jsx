import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Smooth scroll function
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar" id="navbar">
      <Link to="/" onClick={() => setMenu("home")}>
        <img src={logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        {/* Use navigate and smooth scroll for in-page sections */}
        <li
          onClick={() => {
            setMenu("contact");
            navigate("/"); // Ensure navigation back to the root before scrolling
            setTimeout(() => smoothScroll("footer"), 100); // Scroll to footer after navigation
          }}
          className={menu === "contact" ? "active" : ""}
        >
          יצירת קשר
        </li>

        <li
          onClick={() => {
            setMenu("menu");
            navigate("/"); // Ensure navigation back to the root before scrolling
            setTimeout(() => smoothScroll("explore-menu"), 100); // Scroll to menu after navigation
          }}
          className={menu === "menu" ? "active" : ""}
        >
          תפריט
        </li>

        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          דף הבית
        </Link>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={cart} alt="cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
