import './Contact.css'
import { useState } from 'react'
import axios from 'axios'

function Contact() {

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phonenumber: "",
        messege: "",
    })

    const handelsubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/api/user/contact", user);
            alert("📩 detail sended successfully!!");
            console.log(`countact data:`,res.data);

            setUser({
                fullname: "",
                email: "",
                phonenumber: "",
                messege: "",
            })
        } catch (error) {
            console.error(error.response?.data?.message || "Error in submiting contact");
        }
    }

    const handelchenge = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, });
    };

    return (
        <>
            <div className='Contact'>

                <div className="contact-img">
                    <img src="https://static.vecteezy.com/system/resources/previews/003/734/460/non_2x/event-management-creation-and-development-personal-and-corporate-events-photo.jpg" alt="" />
                </div>

                <section className="contact-section">
                    <div className="contact-container">


                        <div className="contact-map">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42412.06737130583!2d72.59835988438422!3d23.022311700216704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756625922277!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>


                        <div className="contact-form">
                            <h2>Contact Us</h2>
                            <form onSubmit={handelsubmit}>
                                <input type="text"
                                    name='fullname'
                                    placeholder="Your Name"
                                    value={user.fullname}
                                    onChange={handelchenge}
                                    required />

                                <input type="email"
                                    name='email'
                                    placeholder="Your Email"
                                    value={user.email}
                                    onChange={handelchenge}
                                    required />

                                <input type="text"
                                    name='phonenumber'
                                    placeholder="Your Phone"
                                    value={user.phonenumber}
                                    onChange={handelchenge}
                                    required />

                                <textarea name='messege'
                                    placeholder="Your Message"
                                    value={user.messege}
                                    onChange={handelchenge}
                                    rows="5" required>
                                </textarea>

                                <button type="submit">Send Message</button>
                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact
