import { useMemo } from "react";
import styles from "./FirstTeamReview.module.css";

const FirstTeamReview = ({ propPadding }) => {
  const firstTeamReviewStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.firstteamreview} style={firstTeamReviewStyle}>
      <div className={styles.reviewersAvatars}>
        <img className={styles.userIcon} alt="" src="/user-1.svg" />
        <div className={styles.reviewerRatings}>
          <div className={styles.starRatings}>
            <img
              className={styles.starPurple500Icon}
              loading="lazy"
              alt=""
              src="/star-purple500.svg"
            />
            <img
              className={styles.starPurple500Icon1}
              alt=""
              src="/star-purple500-1.svg"
            />
            <img
              className={styles.starPurple500Icon2}
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
      <div className={styles.reviewContent}>
        <div className={styles.foe}>FOE</div>
        <div className={styles.sampleReview}>Sample review</div>
      </div>
    </div>
  );
};

export default FirstTeamReview;
