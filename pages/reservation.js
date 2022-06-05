import styles from "@styles/Reservation.module.css";

const ReservationPage = () => {
  return (
    <main className={styles.ReservationPage}>
      <h2>Book a table</h2>

      <form>
        <div className={styles.Guests}>
          <h4>Guests</h4>
          <input type="number" />
        </div>

        <div className={styles.Date}>
          <h4>Date</h4>
          <input type="date" />
        </div>

        <div className={styles.Time}>
          <h4>Time</h4>
          <input type="time" />
        </div>

        <div className={styles.Name}>
          <h4>Name</h4>
          <input type="text" />
        </div>

        <div className={styles.Email}>
          <h4>Email</h4>
          <input type="email" />
        </div>

        <div className={styles.Phone}>
          <h4>Phone</h4>
          <input type="number" />
        </div>

        <button>SUBMIT</button>
      </form>
    </main>
  );
};

export default ReservationPage;
