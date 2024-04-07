import React from "react";
import { BottomBar } from "../../components/BottomBar";
import { Button } from "../../components/Button";
import "./style.css";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="div-2">

         <div className="nav-bar">
          <img className="logo" alt="Logo" src="/img/logo.png" />
           <div className="buttons-container">
             <Button className="support" divClassName="button-instance" text="Support" />
             <Button className="about-us" divClassName="button-instance" text="About Us" />
           </div>
        </div>
        

        <div className="overlap-group">
        <div className="text-wrapper">MedInteract</div>
          <p className="slogan">Improving health, one interaction at a time!</p>
          <p className="description">Thank you for being here! Continue browsing our platform.</p>
        </div>

        <div className="buttons">
          <Button className="design-component-instance-node" divClassName="guest" text="Guest"/>
          <Button className="design-component-instance-node" divClassName="button-2" text="Sign Up" />
          <Button className="log-in" divClassName="button-2" text="Log In" />
        </div>
       
       
        <BottomBar
          className="bottom-bar-instance"
          divClassName="bottom-bar-3"
          divClassName1="bottom-bar-3"
          divClassNameOverride="bottom-bar-3"
          elementAllRightsClassName="bottom-bar-3"
          emergencyNumClassName="bottom-bar-3"
          itemsClassName="bottom-bar-2"
          termsOfUseClassName="bottom-bar-3"
          text="About Us"
        />
      </div>
    </div>
  );
};
