import styles from "@styles/Hero.module.css";
import Image from "next/image";
import { IoMdClock } from "react-icons/io";
import { IoMapSharp, IoCall } from "react-icons/io5";
import heroImage from "@public/hero.png";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Content}>
        <h1>
          Best pizza, best <br /> value
        </h1>
        <p>
          the right slice at the <br /> right price
        </p>
      </div>

      <Image src={heroImage} />

      <div className={styles.Cards}>
        <div className={styles.Card}>
          <IoMdClock />
          <p>Mn - Fr 09:00 am - 11:00 pm</p>
          <p>Working hours</p>
        </div>

        <div className={styles.Card}>
          <IoMapSharp />
          <p>168/7a, Dorgah Road, Khulna</p>
          <p>Our location</p>
        </div>

        <div className={styles.Card}>
          <IoCall />
          <p>+88 017-1234567</p>
          <p>Call us</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
