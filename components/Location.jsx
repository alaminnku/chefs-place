import styles from "@styles/Location.module.css";

const Location = () => {
  return (
    <section className={styles.Location}>
      <h2>We are here</h2>
      <iframe
        className={styles.Map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4169704405676!2d89.54881401566601!3d22.82405782944397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff91b5e39f0c17%3A0x2d130df9a8c47066!2s4Cheez!5e0!3m2!1sen!2sbd!4v1653883487213!5m2!1sen!2sbd"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
