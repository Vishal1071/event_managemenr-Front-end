import { useState } from 'react'
import './AdminProfile.css'
import { useAuth } from '../../Context/AuthContext';
import { MdAddAPhoto } from "react-icons/md";
import { useEffect } from 'react';
import axios from 'axios';

function AdminProfile() {

  const [profilepic, setProfilepic] = useState("/proPic.jpg");
  const { user, setUser } = useAuth();

  const [formData, setFormData] = useState({
    AdminName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(()=>{
    if(user){
      setFormData({
        AdminName: user.name || "",
        email: user.email || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    }
  },[user])

  const handelPicChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfilepic(URL.createObjectURL(file));
    }
  }

  const handeleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelsubmit = async (e) => {
    e.preventDefault();

    if(formData.newPassword !== formData.confirmPassword){
      alert("New password and confirm password do not match");
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");

      const payload = {
      name : formData.AdminName,
      email : formData.email,
    }
     if(formData.newPassword.trim() !== ""){
      payload.password = formData.newPassword;
     }

     const response = await axios.put(
      `http://localhost:8080/api/user/updateUser/${user._id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
     )

     setUser(response.data.user);
     alert("Profile updated successfully");
    
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Update failed");
    }
    
    setFormData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  return (

    <>
      <div className="admin-profile">
        <h3>Admin Profile</h3>

        <form onSubmit={handelsubmit}>

          <div className="proPic">
            <img src={profilepic} alt="Profile" />
            <label htmlFor="fileInput" className='pic-icon'>
              <MdAddAPhoto />
            </label>
            <input
              type="file"
              id='fileInput'
              style={{ display: "none" }}
              onChange={handelPicChange}
            />
          </div>

          <div className="admin-name-afterpic">
            <p>{formData.AdminName}</p>
            <p>{formData.email}</p>
          </div>

          <div className="submit">
            <button type='submit'>Edit</button>
          </div>

          {/* name & email */}
          <div className="input-group">
            <label htmlFor="adname">Admin Name:</label>
            <input
              type="text"
              name="AdminName"
              id="adname"
              value={formData.AdminName}
              onChange={handeleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handeleChange}
            />
          </div>

          {/* password */}

          <div className="input-group">
            <label htmlFor="curpass">Current Password:</label>
            <input
              type="password"
              name="currentPassword"
              id="curpass"
              value={formData.currentPassword}
              onChange={handeleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="newPass">New Password:</label>
            <input
              type="password"
              name="newPassword"
              id="newPass"
              value={formData.newPassword}
              onChange={handeleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confpass">Confirm new Password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confpass"
              value={formData.confirmPassword}
              onChange={handeleChange}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminProfile
