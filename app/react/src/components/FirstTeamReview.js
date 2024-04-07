import styles from "./FirstTeamReview.module.css";

const FirstTeamReview = () => {
  return (
    <div className={styles.firstteamreview}>
      <div className={styles.userParent}>
        <img
          className={styles.userIcon}
          loading="lazy"
          alt=""
          src="/img/user-1.svg"
        />
        <div className={styles.dropdownboxWrapper}>
          <div className={styles.dropdownbox}>
            <img
              className={styles.starPurple500Icon}
              loading="lazy"
              alt=""
              src="/img/star-purple500.svg"
            />
            <img
              className={styles.starPurple500Icon1}
              loading="lazy"
              alt=""
              src="/img/star-purple500-1.svg"
            />
            <img
              className={styles.starPurple500Icon2}
              loading="lazy"
              alt=""
              src="/img/star-purple500-2.svg"
            />
            <img
              className={styles.starHalfIcon}
              loading="lazy"
              alt=""
              src="/img/star-half.svg"
            />
            <img
              className={styles.starOutlineIcon}
              loading="lazy"
              alt=""
              src="/img/star-outline.svg"
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
