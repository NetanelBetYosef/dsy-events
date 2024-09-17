import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img className="footer-logo" src={logo} alt="" />
            <div className="footer-social-icons">
                <a href="https://www.instagram.com/angel.habira?utm_source=qr&igsh=bmg0MjU1OG41YTA0" target="_blank"><img src={instagram} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">

        </div>
        <div className="footer-content-right">
            <h2>צרו קשר</h2>
            <ul>
                <li>✆ 054-6866775 / 054-2877883</li>
                <li>✉ Dsyeliyahu@gmail.com</li>
                <li><a href="https://wa.link/xtxz8q" target="_blank"><img src={whatsapp} alt="" /></a></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright {year} © כל הזכויות שמורות - DSY Event's</p>
      <span className="footer-credit">Developed by Bet Yosef Netanel</span>
    </div>
  );
};

export default Footer;
