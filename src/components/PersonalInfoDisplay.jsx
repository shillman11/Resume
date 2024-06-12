import "../styles/PersonalInfoDisplay.css";
import React from "react";

function PersonalInfoDisplay({ fullName, email, phoneNumber, location }) {
  return (
    <div className="resume-title-text-container">
      <div className="resume-text-fullName-container">
        <div className="resume-title-text" id="resume-text-fullName">
          {fullName}
        </div>
      </div>
      <div className="resume-title-content-container">
        <div className="icon-container">
          {email && (
            <img src="./src/assets/email.svg" alt="" className="icon" />
          )}
          <div className="resume-title-text" id="resume-text-email">
            {email}
          </div>
        </div>

        <div className="icon-container">
          {phoneNumber && (
            <img src="./src/assets/phone.svg" alt="" className="icon" />
          )}
          <div className="resume-title-text" id="resume-text-phone">
            {phoneNumber}
          </div>
        </div>
        <div className="icon-container">
          {location && (
            <img src="./src/assets/map-marker.svg" alt="" className="icon" />
          )}
          <div className="resume-title-text" id="resume-text-location">
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoDisplay;
