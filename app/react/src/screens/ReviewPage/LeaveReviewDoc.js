import NavBar from "../../components/NavBar";
import FirstTeamReview from "../../components/FirstTeamReview";
import Yourownreview from "../../components/Yourownreview";
import Aboutus from "../../components/Aboutus";
import styles from "./LeaveReviewDoc.module.css";

const LeaveReviewDoc = () => {
  return (
    <div className={styles.leavereviewdoc}>
      <NavBar />
      <main className={styles.frameParent}>
        <section className={styles.doctorsReviewsHaveALookAWrapper}>
          <div className={styles.doctorsReviewsHaveContainer}>
            <span className={styles.doctorsReviewsHaveContainer1}>
              <p className={styles.doctorsReviews}>Doctor’s Reviews</p>
              <p className={styles.haveALook}>
                Have a look at what other patients are saying about our doctors
              </p>
            </span>
          </div>
        </section>
        <section className={styles.firstteamreviewParent}>
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
        </section>
        <Yourownreview />
      </main>
      <Aboutus />
    </div>
  );
};

export default LeaveReviewDoc;
