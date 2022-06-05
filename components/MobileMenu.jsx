import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  MdMenuBook,
  MdGroups,
  MdContactPhone,
  MdCalendarToday,
} from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import styles from "@styles/MobileMenu.module.css";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const currentYear = new Date().getFullYear();

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <section className={`${styles.MobileMenu} ${isOpen && styles.Open}`}>
      <div className={styles.MobileMenuNav}>
        <div className={styles.Logo}>
          <Link href="/">
            <a>
              <Image src="/logo.png" width={50} height={50} />
            </a>
          </Link>
        </div>

        <div className={styles.Icon} onClick={() => setIsOpen(!isOpen)}>
          <IoCloseSharp />
        </div>
      </div>

      <div className={styles.MobileMenuContent}>
        <ul>
          <li onClick={handleCloseMenu}>
            <Link href="/reservation">
              <a>
                <MdCalendarToday />
                Reservation
              </a>
            </Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link href="/menu">
              <a>
                <MdMenuBook />
                Menu
              </a>
            </Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link href="/about-us">
              <a>
                <MdGroups />
                About us
              </a>
            </Link>
          </li>

          <li onClick={handleCloseMenu}>
            <Link href="/contact-us">
              <a>
                <MdContactPhone />
                Contact us
              </a>
            </Link>
          </li>

          <li onClick={handleCloseMenu}>
            <a href="https://www.facebook.com" target="_blank">
              <BsFacebook />
              Facebook
            </a>
          </li>

          <li onClick={handleCloseMenu}>
            <a href="https://www.instagram.com" target="_blank">
              <BsInstagram />
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.Copyright}>
        <p>&copy; Copyright {currentYear} by Chef's Place</p>
        <p>All Rights Reserved</p>
      </div>
    </section>
  );
};

export default MobileMenu;
