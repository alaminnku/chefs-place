import { SiMinutemailer } from "react-icons/si";
import { useState } from "react";
import styles from "@styles/Contact.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    text: "",
  });

  // Destructuring formData
  const { name, phone, text } = formData;

  // Check if any input is empty
  const isEmpty = Object.values(formData).some((value) => value === "");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      ...formData,
      name: "",
      phone: "",
      text: "",
    });
  };

  return (
    <section className={styles.Contact}>
      <h2>Let's talk</h2>

      <div className={styles.FormDetails}>
        <form>
          <div className={styles.Input}>
            <label>Enter your name:</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className={styles.Input}>
            <label>Enter phone number:</label>
            <input
              type="number"
              name="phone"
              value={phone}
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>
          <div className={styles.Input}>
            <label>Enter message:</label>
            <textarea
              type="text"
              name="text"
              value={text}
              placeholder="Enter your message"
              onChange={handleChange}
            />
          </div>
          <SiMinutemailer
            className={`${styles.Submit} ${!isEmpty && styles.Active}`}
            onClick={handleSubmit}
          />
        </form>

        <div className={styles.Details}>
          <h2>Contacts</h2>
          <div className={styles.Phones}>
            <h4>Phones:</h4>
            <div>
              <a href="tel:+88 01701 022532">+88 01701 022532</a>
              <a href="tel:+88 01723 546793">+88 01723 546793</a>
            </div>
          </div>

          <div className={styles.Email}>
            <h4>Email:</h4>
            <a href="mailto:info@chefsplace.com">info@chefsplace.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
