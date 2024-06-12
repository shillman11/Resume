import React from "react";
import "../styles/EducationInfoDisplay.css";

function EducationInfoDisplay({
  school,
  degree,
  startDate,
  endDate,
  location,
}) {
  return (
    <div className="education-info-content-container">
      <div className="education-dates-location-container">
        <div className="education-dates-container">
          {startDate
            ? endDate
              ? `${startDate.slice(5, 7) + "/" + startDate.slice(2, 4)}   -  ${
                  endDate.slice(5, 7) + "/" + endDate.slice(2, 4)
                }`
              : `${startDate.slice(5, 7) + "/" + startDate.slice(2, 4)}-present`
            : ""}
        </div>
        <div className="education-location-container">{location}</div>
      </div>
      <div className="education-school-degree-container">
        <div className="education-school">{school}</div>
        <div className="education-degree-container">{degree}</div>
      </div>
    </div>
  );
}

export default EducationInfoDisplay;
