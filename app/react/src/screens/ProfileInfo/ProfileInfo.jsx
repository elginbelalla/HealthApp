import React, { useState } from "react";
import "./style.css";

export const ProfileInfo = () => {
  
  return (
    <div className="profile-info">
      <img className="logo" alt="Logo" src="/img/logo.png" />
      <div className="contents">
        <div className="progress-bar">
          <div className="active-indicator" />
          <img className="default-line" alt="Default line" src="/img/default-line-1.svg" />
          <div className="default-indicator" />
          <img className="default-line" alt="Default line" src="/img/default-line-1.svg" />
          <div className="default-indicator" />
        </div>

        <div className="info">
          <div className="title">
            <div className="large-title">Personal information</div>
          </div>
          <div className="personal-info">
            <div className="subhead">
              <div className="text-wrapper">Personal measurements</div>
              <p className="div">Based on your data and last measurements:</p>
            </div>


            <div className="div-2">
              <input className="field-label"  placeholder="First Name" type="text" name="firstName" />
              <div className="div-3">
                <div className="contents-2" />
                <img className="line" alt="Line" src="/img/line-5.svg" />
              </div>
            </div>

            <div className="div-2">
              <input className="field-label" placeholder="Last Name" type="text" name="lastNmae" />
              <div className="div-3">
                <div className="contents-2" />
                <img className="line" alt="Line" src="/img/line-5.svg" />
              </div>
            </div>

            <div className="born">
              <div className="div-4">
                <div className="field-label-2">Date of Birth</div>
                <input className="field-label" type="text" placeholder="01/10/2024" name="dateB" />
               
                <div className="div-3">
                  <div className="contents-2" />
                  <img className="line" alt="Line" src="/img/line-3.svg" />
                </div>
              </div>

              <div className="div-4">
                <div className="field-label-2">Place of Birth</div>
                <input className="field-label" type="text" placeholder="Tirana"  name="placeB"/>
                
                <div className="div-3">
                  <div className="contents-2" />
                  <img className="line" alt="Line" src="/img/line-3.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="measurements">
            
            <div className="div-5">
              <p className="field-label-2">Height ( in cm )</p>
              <input className="field-label" type="text" placeholder="170" name="height" />
             
              <div className="div-3">
                <div className="contents-3" />
                <img className="line" alt="Line" src="/img/line-5.svg" />
              </div>
            </div>
            
            <div className="div-5">
              <p className="field-label-2">Weight ( in kg )</p>
              <input className="field-label" type="text" placeholder="64" name="weight"/>
              
              <div className="div-3">
                <div className="contents-4" />
                <img className="line" alt="Line" src="/img/line-5.svg" />
              </div>
            </div>
          </div>



          <div className="buttons">
            <button className="label-wrapper">
              <div className="label">Previous</div>
            </button>
            <button className="label-wrapper">
              <div className="label-2">Next</div>
            </button>
          </div>
        </div>

      </div>
      <img className="icon" alt="Icon" src="/img/icon.svg" />
      <div className="exit-button" />
    </div>
  );
};
