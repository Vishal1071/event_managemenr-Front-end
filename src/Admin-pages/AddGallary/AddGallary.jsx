import './AddGallary.css';
import axios from 'axios';
import { useState } from 'react'

function AddGallary() {
  const [formData, setFormData]= useState({
    title:"",
    category:"",
    file: null,
  });

  const handelchenge =(e)=>{
    const{name, value, files}= e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  }

  const handelsubmit =(e)=>{
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("category", formData.category);
    fd.append("file", formData.file);

    try {

      const res = axios.post("http://localhost:8080/api/gallery/addGallery", fd);
      alert("Upload successful");

      setFormData({
        title:"",
        category:"",
        file: null,
      })

    } catch (error) {
      console.log(error);
      alert("Upload failed");
    }
  }

  return (
    <>
      <div className="post-event-Gallary">
        <h3 className="form-title">Post Category</h3>

        <form onSubmit={handelsubmit}>
          <div className="file-upload">
            <input 
            type="file"
            id='fileUpload'
            name='file'
            onChange={handelchenge}
            hidden
            />
            <label htmlFor="fileUpload" className='choose-file'>
              Choose file
            </label>
            <span className='file-text'>
              {formData.file ? formData.file.name : "No file choosen"}
            </span>
            <label htmlFor="" className="choose-pic-btn">
              CHOOSE PIC
            </label>
          </div>

          <input 
          type="text" 
          name='title'
          placeholder='Title'
          value={formData.title}
          onChange={handelchenge}
          className="form-input"
          required
          />

          <div className="select-category">
          <label htmlFor="category">Choose Category:</label>
          <select 
          name="category" 
          id="category"
          value={formData.category}
          onChange={handelchenge}
          required
          >
            <option value="">-- select --</option>
            <option value={formData.wedding}>wedding</option>
            <option value={formData.birthday}>birthday</option>
            <option value={formData.corporate}>corporate</option>
            <option value={formData.cricket}>cricket</option>
          </select>
          </div>

          <button type='submit' className='submit-btn'>
            POST
          </button>
        </form>
      </div>
    </>
  )
}

export default AddGallary
