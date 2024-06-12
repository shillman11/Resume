import React from "react";
import { useState } from "react";
import "./styles/App.css";
import Resume from "./components/Resume.jsx";
import PersonalInfo from "./components/PersonalInfo.jsx";
import "./styles/Sidebar.css";
import EducationInfo from "./components/EducationInfo.jsx";
import ExperienceInfo from "./components/ExperienceInfo.jsx";
import useExampleData from "./useExampleData.jsx";

function App() {
  // const [personalInfo, setPersonalInfo] = useState({
  //   fullName: "",
  //   email: "",
  //   phoneNumber: "",
  //   location: "",
  // });

  const [personalInfo, setPersonalInfo] = useState(useExampleData.personalInfo);

  // const [educationInfos, setEducationInfos] = useState([
  //   {
  //     school: "",
  //     degree: "",
  //     startDate: "",
  //     endDate: "",
  //     location: "",
  //   },
  // ]);

  const [educationInfos, setEducationInfos] = useState(
    useExampleData.sections.educations
  );

  // const [experienceInfos, setExperienceInfos] = useState([
  //   {
  //     companyName: "",
  //     position: "",
  //     startDate: "",
  //     endDate: "",
  //     location: "",
  //     description: "",
  //   },
  // ]);

  const [experienceInfos, setExperienceInfos] = useState(
    useExampleData.sections.experiences
  );

  console.log(useExampleData.personalInfo);

  const handleInfoChange = (info) => {
    setPersonalInfo(info);
  };

  const handleEducationInfoChange = (index, info) => {
    setEducationInfos((prevEducationInfos) => {
      const newEducationInfos = [...prevEducationInfos];
      newEducationInfos[index] = info;
      return newEducationInfos;
    });
  };

  const handleAddEducationForm = () => {
    setEducationInfos((prevEducationInfos) => [
      ...prevEducationInfos,
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  };

  const handleDeleteEducationForm = () => {
    if (educationInfos.length > 1) {
      const updatedEducationInfos = [...educationInfos];
      updatedEducationInfos.pop(); // Remove the last education info form
      setEducationInfos(updatedEducationInfos);
    }
  };

  const handleExperienceInfoChange = (index, info) => {
    setExperienceInfos((prevExperienceInfos) => {
      const newExperienceInfos = [...prevExperienceInfos];
      newExperienceInfos[index] = info;
      return newExperienceInfos;
    });
  };

  const handleAddExperienceForm = () => {
    setExperienceInfos((prevExperienceInfos) => [
      ...prevExperienceInfos,
      {
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
  };

  const handleDeleteExperienceForm = () => {
    if (experienceInfos.length > 1) {
      const updatedExperienceInfos = [...experienceInfos];
      updatedExperienceInfos.pop(); // Remove the last education info form
      setExperienceInfos(updatedExperienceInfos);
    }
  };

  return (
    <>
      <div className="app">
        <div className="sidebar-container">
          <PersonalInfo onChange={handleInfoChange} />
          <EducationInfo
            educationInfos={educationInfos}
            onChange={handleEducationInfoChange}
            onAddEducationForm={handleAddEducationForm}
            onDeleteEducationForm={handleDeleteEducationForm}
          />
          <ExperienceInfo
            experienceInfos={experienceInfos}
            onChange={handleExperienceInfoChange}
            onAddExperienceForm={handleAddExperienceForm}
            onDeleteExperienceForm={handleDeleteExperienceForm}
          />
        </div>

        <Resume
          personalInfo={personalInfo}
          educationInfos={educationInfos}
          experienceInfos={experienceInfos}
        ></Resume>
        {/* {console.log(educationInfos, "educationInfos")} */}
        {/* {console.log(experienceInfos, "experienceInfos")} */}
      </div>
    </>
  );
}

export default App;
