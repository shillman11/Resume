import "../styles/ExperienceInfo.css";
import React from "react";
import { useState } from "react";
import ExperienceInfoForm from "./ExperienceInfoForm";

function ExperienceInfo({
  experienceInfos,
  onChange,
  onAddExperienceForm,
  onDeleteExperienceForm,
}) {
  const [chevronIconId, setChevronIconId] = useState("chevron-icon-down");
  const [experienceContentContainerClass, setExperienceContentContainerClass] =
    useState("experienceInfo-content-container-visable");

  const handleEducationButtonClick = () => {
    if (chevronIconId === "chevron-icon-up") {
      setChevronIconId("chevron-icon-down");

      setExperienceContentContainerClass(
        "experienceInfo-content-container-visable"
      );
    } else {
      setChevronIconId("chevron-icon-up");

      setExperienceContentContainerClass(
        "experienceInfo-content-container-hidden"
      );
    }
  };

  return (
    <div className="experienceInfo-sidebar-container">
      <div className="experienceInfo-button-container">
        <button
          className="experienceInfo-button"
          onClick={handleEducationButtonClick}
        >
          <img
            src="../src/assets/briefcase.svg"
            alt=""
            className="sidebar-icon"
            id="work-icon"
          />
          <h2 className="experienceInfo-button-header">Experience</h2>
          <img
            src="../src/assets/chevron-up.svg"
            alt=""
            className="sidebar-icon"
            id={chevronIconId}
          />
        </button>
      </div>
      <div className={experienceContentContainerClass}>
        {experienceInfos.map((info, index) => (
          <ExperienceInfoForm
            key={index}
            index={index}
            info={info}
            onChange={onChange}
          />
        ))}
        <div className="buttons-container">
          <button className="remove-button" onClick={onDeleteExperienceForm}>
            <h3>Delete</h3>
          </button>
          <button
            className="experience-add-button-container"
            onClick={onAddExperienceForm}
          >
            <h3>Add Experience</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceInfo;
