import Image from "next/image";
import { AiOutlineMenuFold } from "react-icons/ai";
import Link from "next/link";
import logo from "@public/logo.png";
import styles from "@styles/MobileNav.module.css";

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <nav className={styles.MobileNav}>
      <div className={styles.Logo}>
        <Link href="/">
          <a>
            <Image src={logo} />
          </a>
        </Link>
      </div>
      <div className={styles.Icon} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenuFold />
      </div>
    </nav>
  );
};

export default MobileNav;
