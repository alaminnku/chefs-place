import styles from "@styles/Hero.module.css";
import Image from "next/image";
import { IoMdClock } from "react-icons/io";
import { IoMapSharp, IoCall } from "react-icons/io5";
import heroImage from "@public/hero.png";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.Content}>
        <h1>
          Best food, best <br /> value
        </h1>
        <p>
          The right food at the <br /> right price
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
          <p>New market gate 2, Khulna</p>
          <p>Our location</p>
        </div>

        <div className={styles.Card}>
          <IoCall />
          <a href="tel:+88 017-1234567">+88 017-1234567</a>
          <p>Call us</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
