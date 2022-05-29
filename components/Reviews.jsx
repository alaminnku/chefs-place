import { useState } from "react";
import Image from "next/image";
import reviews from "@data/reviews";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import styles from "@styles/Reviews.module.css";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  let stars = [];
  let filledStars = [];

  // Create an array of five empty stars
  for (let i = 0; i < 5; i++) {
    stars.push(<RiStarSLine key={i} />);
  }

  // Loop through the review stars and push filled stars to filledStars array
  for (let i = 0; i < reviews[currentReview].stars; i++) {
    filledStars.push(<RiStarSFill key={i} />);
  }

  // Splice the stars array to replace the empty stars with filled stars
  stars.splice(0, reviews[currentReview].stars, ...filledStars);

  return (
    <div className={styles.Reviews}>
      <h2>Comments</h2>
      <div key={reviews[currentReview].id}>
        <div className={styles.Comment}>
          <FaQuoteLeft />
          <p>{reviews[currentReview].text}</p>
          <p>
            {reviews[currentReview].customerName} <span> | Customer</span>
          </p>

          <div className={styles.Icons}>
            <IoIosArrowRoundBack
              className={`${styles.LeftArrow} ${
                currentReview === 0 && styles.Disabled
              }`}
              onClick={() =>
                currentReview > 0
                  ? setCurrentReview(currentReview - 1)
                  : currentReview
              }
            />
            <IoIosArrowRoundForward
              className={`${
                currentReview === reviews.length - 1 && styles.Disabled
              }`}
              onClick={() =>
                currentReview < reviews.length - 1
                  ? setCurrentReview(currentReview + 1)
                  : currentReview
              }
            />
          </div>
        </div>

        <div className={styles.Product}>
          <Image
            src={reviews[currentReview].itemImage}
            width={400}
            height={400}
          />
          <div className={styles.ProductDetails}>
            <div className={styles.NamePrice}>
              <p>{reviews[currentReview].itemName}</p>
              <p>{reviews[currentReview].itemPrice}</p>
            </div>

            <p className={styles.Stars}>{stars}</p>

            <p className={styles.Description}>
              {reviews[currentReview].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
