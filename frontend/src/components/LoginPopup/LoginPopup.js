import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>{" "}
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currState !== "Login" ? (
            <input type="text" placeholder="Enter Your Name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Enter Your Password" />
        </div>
        <button>{currState === "Sign up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p onClick={() => setCurrState("Sign up")}>
            Create a new account? <span>Click Here.</span>
          </p>
        ) : (
          <p onClick={() => setCurrState("Login")}>
            Already have an account? <span>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
