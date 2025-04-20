import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="text-[30px] md:text-[50px] font-extrabold text-red-500">
            REDSAN
          </h1>
          <p></p>
          <div className="footer-social-icons flex">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>9664365954</li>
            <li>sankalpreddy111@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">
        Copyright 2025 @ RedSan- All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
