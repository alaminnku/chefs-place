import { useState } from "react";
import styles from "@styles/ContactUsPage.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Destructuring formData
  const { name, email, phone, message } = formData;

  // Check if any input is empty
  const isEmpty = Object.values(formData).some((value) => value === "");

  // Handling input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      ...formData,
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div>
      <main className={styles.ContactUsPage}>
        <h2>Contact Us</h2>

        <form>
          <div className={styles.Name}>
            <h4>Name</h4>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>

          <div className={styles.Email}>
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>

          <div className={styles.Phone}>
            <h4>Phone</h4>
            <input
              type="number"
              name="phone"
              value={phone}
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>

          <div className={styles.Message}>
            <h4>Message</h4>
            <textarea
              type="text"
              name="message"
              value={message}
              placeholder="Write your message"
              onChange={handleChange}
            />
          </div>

          <button
            className={!isEmpty ? styles.Active : null}
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
