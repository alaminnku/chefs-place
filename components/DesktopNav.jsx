import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import styles from "@styles/DesktopNav.module.css";

const DesktopNav = () => {
  return (
    <nav className={styles.DesktopNav}>
      <div className={styles.Logo}>
        <Link href="/">
          <a>
            <Image src="/logo.png" width={50} height={50} />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/reservation">
            <a>Reservation</a>
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>About us</a>
          </Link>
        </li>

        <li>
          <Link href="/contact-us">
            <a>Contact us</a>
          </Link>
        </li>
      </ul>

      <div className={styles.Social}>
        <BsFacebook />
        <BsInstagram />
      </div>
    </nav>
  );
};

export default DesktopNav;
