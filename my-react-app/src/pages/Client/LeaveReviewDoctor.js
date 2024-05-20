import Navbar from "../../components/ClientPage/Navbar";
import FirstTeamReview from "../../components/DocReviews/FirstTeamReview";
import UserReviewFormContainer from "../../components/DocReviews/UserReviewFormContainer";
import FrameComponent from "../../components/RequestTest/FrameComponent1";
import styles from "./LeaveReviewClinc.module.css";

const LeaveReviewDoctor = () => {
  return (
    <div className={styles.leavereviewclinc}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.reviewHeaderContainer}>
          <div className={styles.clinicsReviewsHaveContainer}>
            <span className={styles.clinicsReviewsHaveContainer1}>
              <p className={styles.clinicsReviews}>Doctors’ Reviews</p>
              <p className={styles.haveALook}>
                Have a look at what other patients are saying about our doctors
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

export default LeaveReviewDoctor;
