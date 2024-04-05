import React from "react";
import { Body } from "../../components/Body";
import { BottomBar } from "../../components/BottomBar";
import { Button } from "../../components/Button";
import { LogoName } from "../../components/LogoName";
import { NavBar } from "../../components/NavBar";
import "./style.css";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="div-2">
        <NavBar className="nav-bar-instance" />
        <LogoName className="logo-name-instance" />
        <Body className="body-instance"/>
        <div className="buttons">
          <Button className="design-component-instance-node" divClassName="guest" text="Guest" />
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
