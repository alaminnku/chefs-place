import Image from "next/image";
import aboutUsImage from "@public/about-us.png";
import styles from "@styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <div className={styles.Content}>
        <p>About us</p>
        <h2>Fast food restaurant</h2>
        <p>Best quality foods for friends and family</p>
      </div>

      <div className={styles.CoverImage}>
        <Image src={aboutUsImage} />
      </div>
    </section>
  );
};

export default AboutUs;
