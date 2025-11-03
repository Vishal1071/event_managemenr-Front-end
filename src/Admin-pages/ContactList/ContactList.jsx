import './ContactList.css';
import { useEffect, useState } from 'react';
import axios from "axios";


function ContactList() {

  const [contact , setContact] = useState([]);

  const getAllContact = async() =>{
    try {
      const res = await axios.get("http://localhost:8080/api/user/getAllContact");
      setContact(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error feching contact list", error);
    }
  }

  useEffect(()=>{
    getAllContact();
  },[])

  return (
    <>
      <div className="Contact-tital">
        <div className="contact-name-No">
          <p>No</p>
        </div>
        <div className="contact-name">
          <p>Full_Name</p>
        </div>
        <div className="contact-name-email">
          <p>Email</p>
        </div>
        <div className="contact-name">
          <p>mobile_No</p>
        </div>
        <div className="contact-name">
          <p>message</p>
        </div>
      </div>

      <div className="contactlist-user">
        {contact.map((e, index) => {
          return (
            <div key={index} className="Contact-tital-user">
              <div className="contact-name-No">
                <p>{index + 1}</p>
              </div>
              <div className="contact-name">
                <p>{e.fullname}</p>
              </div>
              <div className="contact-name-email">
                <p>{e.email}</p>
              </div>
              <div className="contact-name">
                <p>{e.phonenumber}</p>
              </div>
              <div className="contact-name">
                <p>{e.messege}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default ContactList
