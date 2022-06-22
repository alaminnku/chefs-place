import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@styles/DesktopNav.module.css";

const DesktopNav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  console.log(pathname);

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
            <a
              className={`${styles.NavLink} ${
                pathname === "/reservation" && styles.Active
              }`}
            >
              Reservation
            </a>
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <a
              className={`${styles.NavLink} ${
                pathname === "/menu" && styles.Active
              }`}
            >
              Menu
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a
              className={`${styles.NavLink} ${
                pathname === "/about-us" && styles.Active
              }`}
            >
              About us
            </a>
          </Link>
        </li>

        <li>
          <Link href="/contact-us">
            <a
              className={`${styles.NavLink} ${
                pathname === "/contact-us" && styles.Active
              }`}
            >
              Contact us
            </a>
          </Link>
        </li>
      </ul>

      <div className={styles.Social}>
        <a href="https://www.facebook.com/octibsoft" target="_blank">
          <BsFacebook />
        </a>

        <a href="https://www.instagram.com/octibsoft/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </nav>
  );
};

export default DesktopNav;
