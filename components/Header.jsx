import { useState } from "react";
import DesktopNav from "./DesktopNav";
import styles from "@styles/Header.module.css";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.Header}>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <DesktopNav />
    </header>
  );
};

export default Header;
