import React from "react";
import "../styles/ExperienceInfoDisplay.css";

function ExperienceInfoDisplay({
  companyName,
  position,
  startDate,
  endDate,
  location,
  description,
}) {
  return (
    <div className="experience-info-content-container">
      <div className="experience-dates-location-container">
        <div className="experience-dates-container">
          {startDate
            ? endDate
              ? `${startDate.slice(5, 7) + "/" + startDate.slice(2, 4)}   -  ${
                  endDate.slice(5, 7) + "/" + endDate.slice(2, 4)
                }`
              : `${startDate.slice(5, 7) + "/" + startDate.slice(2, 4)}-present`
            : ""}
        </div>
        <div className="experience-location-container">{location}</div>
      </div>
      <div className="experience-companyName-position-container">
        <div className="experience-companyName">{companyName}</div>
        <div className="experience-position-container">{position}</div>
        <div className="experience-description-container">{description}</div>
      </div>
    </div>
  );
}

export default ExperienceInfoDisplay;
