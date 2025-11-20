import { useEffect, useState } from "react";
import "./Account.css";
import axios from "axios";
import { useAuth } from '../../Context/AuthContext';
import { MdAddAPhoto } from "react-icons/md";

function Account() {

    const { user, setUser } = useAuth();
    const [selectedFile, setSelectedFile] = useState(null);
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

            // Load existing avatar if user has one
            if (user.avatar) setProfilepic(user.avatar.url || user.avatar);
        }
    }, [user]);

    const handelPicChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setProfilepic(URL.createObjectURL(file));
        setSelectedFile(file);
    };

    const handeleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handelsubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken");

        try {
            let newAvatar = null;

            // 1️⃣ Upload profile picture if new file selected
            if (selectedFile) {
                const picForm = new FormData();
                // backend expects field name 'avatar' (multer: upload.single('avatar'))
                picForm.append("avatar", selectedFile);

                const picRes = await axios.post(
                    `http://localhost:8080/api/user/uploadProfilePic/${user._id}`,
                    picForm,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );

                newAvatar = picRes.data.avatar?.url || picRes.data.avatar;

                // update user instantly and persist
                setUser(prev => {
                    const updated = { ...prev, avatar: newAvatar };
                    try { localStorage.setItem("user", JSON.stringify(updated)); } catch {}
                    return updated;
                });
            }

            // 2️⃣ Update name, email, phone, etc.
            const res = await axios.put(
                `http://localhost:8080/api/user/updateUser/${user._id}`,
                { ...formData },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            alert("Profile updated successfully!");

            // update user in context and persist
            setUser(prev => {
                const updated = {
                    ...prev,
                    ...res.data.user,
                    avatar: newAvatar || prev.avatar,
                };
                try { localStorage.setItem("user", JSON.stringify(updated)); } catch {}
                return updated;
            });

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || "Update failed");
        }

        setFormData(prev => ({ ...prev, password: "" }));
    };

    return (
        <>
            <div className="user-profile-container">
                <h3>User Profile</h3>

                <form onSubmit={handelsubmit} className="user-profile-form">
                    <div className="user-pofile-secation">
                        <div className="user-profile-pic-section">
                            <img 
                              src={user?.avatar?.url || user?.avatar || profilepic} 
                              alt="Profile" 
                              className="user-profile-pic" 
                            />

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
                            <button type='submit'>Edit</button>
                        </div>
                    </div>

                    {/* name & email */}
                    <div className="user-input-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handeleChange}
                        />
                    </div>

                    <div className="user-input-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handeleChange}
                        />
                    </div>

                    {/* Phone number */}
                    <div className="user-input-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handeleChange}
                        />
                    </div>

                </form>
            </div>
        </>
    );
}

export default Account;
