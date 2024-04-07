import React from "react";
import "./style.css";

export const PersonalHistory = () => {
  return (
    <div className="profile">
      <img className="logo" alt="Logo" src="/img/logo.png" />
      <div className="contents">
        <div className="progress-bar">
          <div className="active-indicator" />
          <img className="img" alt="Active line" src="/img/active-line.svg" />
          <div className="active-indicator" />
          <img className="img" alt="Default line" src="/img/default-line.svg" />
          <div className="default-indicator" />
        </div>
        <div className="history">
          <div className="title">
            <div className="large-title">Personal health history</div>
            <p className="body-text">
              Fill in the data based on your health history and previous assessments.. It will take a couple of minutes.
            </p>
          </div>
          <div className="body">
            <div className="div">
              <div className="subhead">
                <div className="text-wrapper">Previous health-related concerns</div>
                <p className="p">List all your previous health issues.</p>
              </div>
              <div className="input" />
            </div>
            <div className="div">
              <div className="subhead">
                <div className="text-wrapper">Previous medication</div>
                <p className="p">List all your previous medication.</p>
              </div>
              <div className="rectangle-wrapper">
                <div className="rectangle" />
              </div>
            </div>
            <div className="div">
              <div className="subhead">
                <div className="text-wrapper">Notes</div>
                <p className="p">List any notes you might have about your health concerns.</p>
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
            <div className="label-2">Next</div>
          </button>
        </div>
      </div>
      <img className="exit-button" alt="Exit button" src="/img/exitbutton.svg" />
    </div>
  );
};
