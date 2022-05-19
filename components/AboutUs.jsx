import Image from "next/image";
import aboutUsImage from "@public/about-us.png";
import styles from "@styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <div className={styles.Content}>
        <p>About us</p>
        <h2>Family pizza restaurant</h2>
        <p>Best quality pizza for friends and family</p>
      </div>

      <div className={styles.CoverImage}>
        <Image src={aboutUsImage} />
      </div>
    </div>
  );
};

export default AboutUs;
