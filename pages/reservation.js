import { useState } from "react";
import styles from "@styles/ReservationPage.module.css";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    guests: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  // Destructuring formData
  const { guests, date, time, name, email, phone } = formData;

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
      guests: "",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <main className={styles.ReservationPage}>
      <h2>Book a table</h2>

      <form>
        <div className={styles.Guests}>
          <h4>Guests</h4>
          <input
            type="number"
            name="guests"
            value={guests}
            placeholder="Number of guests"
            onChange={handleChange}
          />
        </div>

        <div className={styles.Date}>
          <h4>Date</h4>
          <input type="date" name="date" value={date} onChange={handleChange} />
        </div>

        <div className={styles.Time}>
          <h4>Time</h4>
          <input type="time" name="time" value={time} onChange={handleChange} />
        </div>

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

        <button
          className={!isEmpty ? styles.Active : null}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </form>
    </main>
  );
};

export default ReservationPage;
