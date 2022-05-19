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

  return (
    <div className={`${styles.MobileMenu} ${isOpen && styles.Open}`}>
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
          <li>
            <Link href="/reservation">
              <a>
                <MdCalendarToday />
                Reservation
              </a>
            </Link>
          </li>

          <li>
            <Link href="/menu">
              <a>
                <MdMenuBook />
                Menu
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about-us">
              <a>
                <MdGroups />
                About us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a>
                <MdContactPhone />
                Contact us
              </a>
            </Link>
          </li>

          <li>
            <a href="www.facebook.com">
              <BsFacebook />
              Facebook
            </a>
          </li>

          <li>
            <a href="www.instagram.com">
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
    </div>
  );
};

export default MobileMenu;
