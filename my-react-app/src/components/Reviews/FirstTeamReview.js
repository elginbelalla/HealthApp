import styles from "./FirstTeamReview.module.css";

const FirstTeamReview = () => {
  return (
    <div className={styles.firstteamreview}>
      <div className={styles.userReviewContainer}>
        <img
          className={styles.userIcon}
          loading="lazy"
          alt=""
          src="/user-1.svg"
        />
        <div className={styles.starRatingContainer}>
          <div className={styles.starsRow}>
            <img
              className={styles.starPurple500Icon}
              loading="lazy"
              alt=""
              src="/star-purple500.svg"
            />
            <img
              className={styles.starPurple500Icon1}
              loading="lazy"
              alt=""
              src="/star-purple500-1.svg"
            />
            <img
              className={styles.starPurple500Icon2}
              loading="lazy"
              alt=""
              src="/star-purple500-2.svg"
            />
            <img
              className={styles.starHalfIcon}
              loading="lazy"
              alt=""
              src="/star-half.svg"
            />
            <img
              className={styles.starOutlineIcon}
              loading="lazy"
              alt=""
              src="/star-outline.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.foeParent}>
        <div className={styles.foe}>FOE</div>
        <div className={styles.sampleReview}>Sample review</div>
      </div>
    </div>
  );
};

export default FirstTeamReview;
