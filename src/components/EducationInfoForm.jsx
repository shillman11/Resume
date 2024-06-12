import "../styles/educationInfoForm.css";

function EducationInfoForm({ index, info, onChange }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(index, { ...info, [name]: value });
  };

  return (
    <div className="education-form-container">
      <form action="" className="education-form">
        <div>
          <label htmlFor="education-school" className="form-label">
            School
          </label>
          <input
            type="text"
            className="form-input"
            id="education-school"
            name="school"
            onChange={handleChange}
            placeholder="Enter school / university"
            value={info.school}
          />
        </div>
        <div>
          <label htmlFor="education-degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-input"
            id="education-degree"
            name="degree"
            value={info.degree}
            onChange={handleChange}
            placeholder="Enter degree / field of study"
          />
        </div>
        <div>
          <label htmlFor="education-startDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-input"
            id="education-startDate"
            name="startDate"
            value={info.startDate}
            onChange={handleChange}
            placeholder="Enter start date"
          />
        </div>
        <div>
          <label htmlFor="education-endDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-input"
            id="education-endDate"
            name="endDate"
            value={info.endDate}
            onChange={handleChange}
            placeholder="Enter end date"
          />
        </div>
        <div>
          <label htmlFor="education-location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-input"
            id="education-location"
            value={info.location}
            name="location"
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>
      </form>
    </div>
  );
}

export default EducationInfoForm;
