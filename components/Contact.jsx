import { SiMinutemailer } from "react-icons/si";
import { useState } from "react";
import styles from "@styles/Contact.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hasEmpty = Object.values(formData).some((value) => value === "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasEmpty) {
      alert("Please fill all the fields!");
      return;
    }

    alert("Your message has been sent!");

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
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.Input}>
            <label>Enter phone number:</label>
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.Input}>
            <label>Enter message:</label>
            <textarea
              type="text"
              placeholder="Text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </div>
          <SiMinutemailer className={styles.Submit} onClick={handleSubmit} />
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
