import "../styles/ExperienceInfoForm.css";

function ExperienceInfoForm({ index, info, onChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(index, { ...info, [name]: value });
  };

  return (
    <div className="experience-form-container">
      <form action="" className="experience-form">
        <div>
          <label htmlFor="experience-companyName" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-input"
            id="experience-companyName"
            name="companyName"
            onChange={handleChange}
            placeholder="Enter company name"
            value={info.companyName}
          />
        </div>
        <div>
          <label htmlFor="experience-position" className="form-label">
            Position Title
          </label>
          <input
            type="text"
            className="form-input"
            id="experience-position"
            name="position"
            value={info.position}
            onChange={handleChange}
            placeholder="Enter position title"
          />
        </div>
        <div>
          <label htmlFor="experience-startDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-input"
            id="experience-startDate"
            name="startDate"
            value={info.startDate}
            onChange={handleChange}
            placeholder="Enter start date"
          />
        </div>
        <div>
          <label htmlFor="experience-endDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-input"
            id="experience-endDate"
            name="endDate"
            value={info.endDate}
            onChange={handleChange}
            placeholder="Enter end date"
          />
        </div>
        <div>
          <label htmlFor="experience-location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-input"
            id="experience-location"
            value={info.location}
            name="location"
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>
        <div>
          <label htmlFor="experience-description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-input"
            id="experience-description"
            value={info.description}
            name="description"
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>
      </form>
    </div>
  );
}

export default ExperienceInfoForm;
