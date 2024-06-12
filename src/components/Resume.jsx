import "../styles/Resume.css";
import { useState } from "react";
import PersonalInfoDisplay from "./PersonalInfoDisplay.jsx";
import EducationInfoDisplay from "./EducationInfoDisplay.jsx";
import ExperienceInfoDisplay from "./ExperienceInfoDisplay.jsx";

function Resume({ personalInfo, educationInfos, experienceInfos }) {
  return (
    <div className="resume-container">
      <div className="resume-title-container">
        <PersonalInfoDisplay
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          location={personalInfo.location}
        ></PersonalInfoDisplay>
      </div>
      {(educationInfos[0].school.length > 0 ||
        educationInfos[0].degree.length > 0 ||
        educationInfos[0].startDate.length > 0 ||
        educationInfos[0].endDate.length > 0 ||
        educationInfos[0].location.length > 0) && (
        <div className="education-info-container">
          <div className="resume-section-title" id="education-section-title">
            Education
          </div>
          {educationInfos.map((educationInfo, index) => (
            <EducationInfoDisplay
              key={index}
              school={educationInfo.school}
              startDate={educationInfo.startDate}
              endDate={educationInfo.endDate}
              location={educationInfo.location}
              degree={educationInfo.degree}
            />
          ))}
        </div>
      )}
      {(experienceInfos[0].companyName.length > 0 ||
        experienceInfos[0].position.length > 0 ||
        experienceInfos[0].startDate.length > 0 ||
        experienceInfos[0].endDate.length > 0 ||
        experienceInfos[0].location.length > 0 ||
        experienceInfos[0].description.length > 0) && (
        <div className=" experience-info-container">
          <div className="resume-section-title" id=" experience-section-title">
            Experience
          </div>
          {experienceInfos.map((experienceInfo, index) => (
            <ExperienceInfoDisplay
              key={index}
              companyName={experienceInfo.companyName}
              position={experienceInfo.position}
              startDate={experienceInfo.startDate}
              endDate={experienceInfo.endDate}
              location={experienceInfo.location}
              description={experienceInfo.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Resume;
