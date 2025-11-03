import './EventPost.css';
import { useState } from 'react';

function EventPost() {

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    price: "",
    category: "",
    location: "",
    description: "",
    file: null,
  });

  // Handle change for inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Example: if you want to send to backend
    // fetch("/api/events", { method:"POST", body: JSON.stringify(formData) })
  };

  return (
    <>
      <div className="post-event-container">
      <h3 className="form-title">Post Event</h3>

      <form onSubmit={handleSubmit}>
        {/* File Upload */}
        <div className="file-upload">
          <input
            type="file"
            id="fileUpload"
            name="file"
            onChange={handleChange}
            hidden
          />
          <label htmlFor="fileUpload" className="choose-file">
            Choose file
          </label>
          <span className="file-text">
            {formData.file ? formData.file.name : "No file chosen"}
          </span>
          <button type="button" className="choose-pic-btn">
            CHOOSE PIC
          </button>
        </div>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title*"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
          required
        />

        {/* Start Date */}
        <div className="input-with-icon">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* End Date */}
        <div className="input-with-icon">
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Start Time */}
        <div className="input-with-icon">
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* End Time */}
        <div className="input-with-icon">
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Price */}
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="form-input"
        />

        {/* Category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select Category</option>
          <option>Music</option>
          <option>Sports</option>
          <option>Education</option>
          <option>Other</option>
        </select>

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="form-input"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="form-input textarea"
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          POST
        </button>
      </form>
    </div>
    </>
  )
}

export default EventPost
