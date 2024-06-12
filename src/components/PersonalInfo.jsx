import "../styles/PersonalInfo.css";
import { useState } from "react";
import PersonalInfoDisplay from "./PersonalInfoDisplay.jsx";

function PersonalInfo({ onChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  <input type="text" />;
  return (
    <div className="personalInfo-sidebar-container">
      <h2>Personal Details</h2>
      <form action="" className="personalInfo-form">
        <div>
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            id="fullName"
            placeholder="First and last name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone</label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            id="phoneNumber"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label htmlFor="location">Address</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            id="location"
            placeholder="City, Country"
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
