import styles from "@styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@public/logo.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Content}>
        <div className={styles.Logo}>
          <Link href="/">
            <a>
              <Image src={Logo} />
            </a>
          </Link>
        </div>

        <div className={styles.Schedule}>
          <h4>Schedule</h4>
          <p>Mon-Fr:</p>
          <p>9:00 am - 11:00 pm</p>
        </div>

        <div className={styles.Social}>
          <h4>Social</h4>
          <Link href="/">
            <a>Facebook</a>
          </Link>
          <Link href="/">
            <a>Instagram</a>
          </Link>
        </div>
      </div>
      <p className={styles.Copyright}>&copy; Copyright 2022 by Chef's Place</p>
    </footer>
  );
};

export default Footer;
