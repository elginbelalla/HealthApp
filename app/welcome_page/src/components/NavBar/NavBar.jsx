/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const NavBar = ({ className }) => {
  return (
    <div className={`nav-bar ${className}`}>
      <img className="logo" alt="Logo" src="/img/logo.png" />
      <div className="buttons-container">
        <Button className="support" divClassName="button-instance" text="Support" />
        <Button className="about-us" divClassName="button-instance" text="About Us" />
      </div>
    </div>
  );
};
