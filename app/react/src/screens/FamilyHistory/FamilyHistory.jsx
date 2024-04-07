import React from "react";
import "./style.css";

export const FamilyHistory = () => {
  return (
    <div className="profile">
      <img className="logo" alt="Logo" src="/img/logo.png" />
      <div className="contents">
        <div className="progress-bar">
          <div className="div" />
          <img className="img" alt="Active line" src="/img/default-line.svg" />
          <div className="div" />
          <img className="img" alt="Default line" src="/img/default-line.svg" />
          <div className="div" />
        </div>
        <div className="history">
          <div className="title">
            <div className="large-title">Family health history</div>
            <p className="body-text">
              Fill in the data based on the health history and previous assessments of your family members. It will take
              a couple of minutes.
            </p>
          </div>
          <div className="body">
            <div className="div-2">
              <div className="subhead">
                <div className="text-wrapper">Previous health-related concerns</div>
                <p className="p">List all your family members’ health issues.</p>
              </div>
              <div className="input" />
            </div>
            <div className="div-2">
              <div className="subhead">
                <div className="text-wrapper">Previous medication</div>
                <p className="p">List all your family members’ previous medication.</p>
              </div>
              <div className="rectangle-wrapper">
                <div className="rectangle" />
              </div>
            </div>
            <div className="div-2">
              <div className="subhead">
                <div className="text-wrapper">Notes</div>
                <p className="p">List any notes you might have about your family members’ health concerns.</p>
              </div>
              <div className="rectangle-wrapper">
                <div className="rectangle" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="label-wrapper">
            <div className="label">Previous</div>
          </button>
          <button className="label-wrapper">
            <div className="label-2">Finish</div>
          </button>
        </div>
      </div>
      <img className="exit-button" alt="Exit button" src="/img/exitbutton.svg" />
    </div>
  );
};
