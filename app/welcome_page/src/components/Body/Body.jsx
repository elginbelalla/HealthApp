/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Body = ({ className }) => {
  return (
    <div className={`body ${className}`}>
      <div className="overlap-group">
        <p className="slogan">Improving health, one interaction at a time!</p>
        <p className="description">Thank you for being here! Continue browsing our platform.</p>
      </div>
    </div>
  );
};
