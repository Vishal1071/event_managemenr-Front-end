import './UserList.css'
import axios from "axios"
import { useState, useEffect, use } from 'react';


function UserList() {

    const [users, setUsers]= useState([]);

    
    const fechUsers = async() =>{
        try {

             const token = localStorage.getItem("accessToken");
            if (!token) {
                console.error("No token found");
                return;
            }

            const res = await axios.get("http://localhost:8080/api/user/getAllUser",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            // console.log(res.data.data);
            const onlyUser = res.data.data.filter((user) => user.role === "user"); 
            setUsers(onlyUser);

        } catch (error) {
            console.error("Error feching users", error);
        }
    }

    useEffect(()=>{
        fechUsers();
    }, [users]);

    const handleDelete = async(id) =>{
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if(!confirmDelete) return;

        try {
            const token = localStorage.getItem("accessToken");

            await axios.delete(`http://localhost:8080/api/user/deleteUser/${id}`,
                { headers: { Authorization: `Bearer ${token}`} }
            );
            alert("User deleted successfully ✅");
            fechUsers();
        } catch (error) {
            console.error("Error feching users", error);
        }
    }

    return (
        <>
            <div className="User-main">
                <div className="User-tital">
                    <div className="no UserList-text">
                        <p>No</p>
                    </div>
                    <div className="Profile NO UserList-text">
                        <p>Profile</p>
                    </div>
                    <div className="Name NAEM UserList-text">
                        <p>Name</p>
                    </div>
                    <div className="Email NAEM UserList-text">
                        <p>Email</p>
                    </div>
                    <div className="Gender no UserList-text">
                        <p>Gender</p>
                    </div>
                    <div className="Pnumber NO UserList-text">
                        <p>Phone number</p>
                    </div>
                    <div className="Action NO UserList-text">
                        <p>Action</p>
                    </div>
                </div>

                <div className="user-list">
                    {users.map((user, index) => {
                        return (
                            <div key={index} className="user-info">
                                <div className="no solid">
                                    <p>{index + 1}</p>
                                </div>
                                <div className="Profile NO solid">
                                    <img src={"/proPic.jpg"} alt={user.name} width={"45rem"} />
                                </div>
                                <div className="Name NAEM solid">
                                    <p>{user.name}</p>
                                </div>
                                <div className="Email NAEM solid">
                                    <p>{user.email}</p>
                                </div>
                                <div className="Gender no solid">
                                    <p>{user.gender}</p>
                                </div>
                                <div className="Pnumber NO solid">
                                    <p>{user.phone}</p>
                                </div>
                                <div className="Action NO solid">
                                    <button onClick={()=>handleDelete(user._id)}>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )
}

export default UserList
