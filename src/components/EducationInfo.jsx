import "../styles/EducationInfo.css";
import React from "react";
import { useState } from "react";
import EducationInfoForm from "./EducationInfoForm";
import CHEVRONICON from "../assets/chevron-up.svg";
import SCHOOLICON from "../assets/school.svg";

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
            src={SCHOOLICON}
            alt=""
            className="sidebar-icon"
            id="school-icon"
          />
          <h2 className="educationInfo-button-header">Education</h2>
          <img
            src={CHEVRONICON}
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
