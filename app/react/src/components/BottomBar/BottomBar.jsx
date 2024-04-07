/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BottomBar = ({
  className,
  itemsClassName,
  divClassName,
  text = "About us",
  emergencyNumClassName,
  divClassNameOverride,
  divClassName1,
  termsOfUseClassName,
  elementAllRightsClassName,
}) => {
  return (
    <div className={`bottom-bar ${className}`}>
      <div className={`items ${itemsClassName}`}>
        <div className={`div ${divClassName}`}>{text}</div>
        <div className={`div ${emergencyNumClassName}`}>Emergency Numbers</div>
        <div className={`div ${divClassNameOverride}`}>Reviews</div>
        <div className={`div ${divClassName1}`}>Privacy Policy</div>
        <div className={`div ${termsOfUseClassName}`}>Terms of Use</div>
      </div>
      <p className={`element-all-rights ${elementAllRightsClassName}`}>© 2024, All Rights Reserved</p>
    </div>
  );
};

BottomBar.propTypes = {
  text: PropTypes.string,
};
