import { useEffect, useState } from "react";
import "./Account.css";
import axios from "axios";
import { useAuth } from '../../Context/AuthContext';
import { MdAddAPhoto } from "react-icons/md";

function Account() {

    const { user } = useAuth();

    const [profilepic, setProfilepic] = useState("/proPic.jpg");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                password: "",
                phone: user.phone || "",
                gender: user.gender || "",
            });
        }
    }, [user])

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

        try {
            const res = await axios.put(`http://localhost:8080/api/user/updatUser/${user._id}`,
                { ...formData });

            alert("Profile update successfully!!")
            console.log(res.data);

            const updateUser = res.data.user;
            
            setFormData({
                name: updateUser.name || "", 
                email: updateUser.email || "",
                password: "",
                phone: updateUser.phone || "",
                gender: updateUser.gender || "",
            });

        } catch (error) {
            console.error("Error Updeting users", error);
            alert(error.response?.data?.message || "Update failed ❌");
        }

        setFormData((prev) => ({
            ...prev,
            password: "",
        }));
    };

    return (
        <>

            <div className="user-profile-container">
                <h3>User Profile</h3>

                <form onSubmit={handelsubmit} className="user-profile-form">
                    <div className="user-pofile-secation">
                        <div className="user-profile-pic-section">
                            <img src={profilepic} alt="Profile" className="user-profile-pic" />
                            <label htmlFor="fileInput" className='user-pic-upload-icon'>
                                <MdAddAPhoto />
                            </label>
                            <input
                                type="file"
                                id='fileInput'
                                style={{ display: "none" }}
                                onChange={handelPicChange}
                            />
                        </div>

                        <div className="user-info-display">
                            <p>{formData.name}</p>
                            <p>{formData.email}</p>
                        </div>

                        <div className="user-submit-btn">
                            <button type='submit' >Edit</button>
                        </div>
                    </div>

                    {/* name & email */}
                    <div className="user-input-group">
                        <label htmlFor="adname">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="adname"
                            value={formData.name}
                            onChange={handeleChange}
                        />
                    </div>

                    <div className="user-input-group">
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
                    <div className="user-input-group">
                        <label htmlFor="newPass">New Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="newPass"
                            value={formData.password}
                            onChange={handeleChange}
                        />
                    </div>

                    {/* Gender */}
                    <div className="user-input-group">
                        <label>Gender:</label>
                        <div className="user-radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handeleChange}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handeleChange}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === "Other"}
                                    onChange={handeleChange}
                                />
                                Other
                            </label>
                        </div>
                    </div>

                    {/* Phone number */}
                    <div className="user-input-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handeleChange}
                            placeholder="Enter phone number"
                        />
                    </div>

                </form>
            </div>

        </>
    );
}


export default Account
