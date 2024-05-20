import Navbar from "../../components/ClientPage/Navbar";
import FirstTeamReview from "../../components/Reviews/FirstTeamReview";
import UserReviewFormContainer from "../../components/Reviews/UserReviewFormContainer";
import FrameComponent from "../../components/RequestTest/FrameComponent1";
import styles from "./LeaveReviewClinc.module.css";

const LeaveReviewClinc = () => {
  return (
    <div className={styles.leavereviewclinc}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.reviewHeaderContainer}>
          <div className={styles.clinicsReviewsHaveContainer}>
            <span className={styles.clinicsReviewsHaveContainer1}>
              <p className={styles.clinicsReviews}>Clinics’ Reviews</p>
              <p className={styles.haveALook}>
                Have a look at what other patients are saying about our clinics
              </p>
            </span>
          </div>
        </div>
        <div className={styles.firstteamreviewParent}>
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
        </div>
        <UserReviewFormContainer />
      </main>
      <FrameComponent />
    </div>
  );
};

export default LeaveReviewClinc;
