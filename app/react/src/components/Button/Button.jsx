/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ className, divClassName, text = "Text" }) => {
  return (
    <button className={`button ${className}`}>
      <div className={`click-to-slide ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
