import "../styles/EducationInfo.css";
import React from "react";
import { useState } from "react";
import EducationInfoForm from "./EducationInfoForm";

function EducationInfo({
  educationInfos,
  onChange,
  onAddEducationForm,
  onDeleteEducationForm,
}) {
  const [chevronIconId, setChevronIconId] = useState("chevron-icon-down");
  const [educationContentContainerClass, setEducationContentContainerClass] =
    useState("educationInfo-content-container-visable");

  const handleEducationButtonClick = () => {
    if (chevronIconId === "chevron-icon-up") {
      setChevronIconId("chevron-icon-down");

      setEducationContentContainerClass(
        "educationInfo-content-container-visable"
      );
    } else {
      setChevronIconId("chevron-icon-up");

      setEducationContentContainerClass(
        "educationInfo-content-container-hidden"
      );
    }
  };

  return (
    <div className="educationInfo-sidebar-container">
      <div className="educationInfo-button-container">
        <button
          className="educationInfo-button"
          onClick={handleEducationButtonClick}
        >
          <img
            src="../src/assets/school.svg"
            alt=""
            className="sidebar-icon"
            id="school-icon"
          />
          <h2 className="educationInfo-button-header">Education</h2>
          <img
            src="../src/assets/chevron-up.svg"
            alt=""
            className="sidebar-icon"
            id={chevronIconId}
          />
        </button>
      </div>
      <div className={educationContentContainerClass}>
        {educationInfos.map((info, index) => (
          <EducationInfoForm
            key={index}
            index={index}
            info={info}
            onChange={onChange}
          />
        ))}
        <div className="buttons-container">
          <button className="remove-button" onClick={onDeleteEducationForm}>
            <h3>Delete</h3>
          </button>
          <button
            className="education-add-button-container"
            onClick={onAddEducationForm}
          >
            <h3>Add Education</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EducationInfo;
