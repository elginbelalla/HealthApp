import React from "react";
import { useNavigate } from "react-router-dom";
import FirstTeamReview from "./FirstTeamReview";
import styles from "./DoctorTestimonials.module.css";
import { NavLink } from "react-router-dom";

const DoctorTestimonials = () => {
  const navigate = useNavigate();

  const handleClinicReviewsClick = () => {
    navigate("/clinic-reviews");
  };

  const handleDoctorReviewsClick = () => {
    navigate("/doctor-reviews");
  };

  return (
    <div className={styles.doctorTestimonials}>
      <div className={styles.testimonialHeader}>
        <h1 className={styles.whatPeopleAre}>
          What people are saying about our doctors
        </h1>
      </div>
      <div className={styles.doctorReviewList}>
        <div className={styles.doctorreviews}>
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
        </div>
      </div>
      <div className={styles.clinicTestimonials}>
        <div className={styles.clinicTestimonialHeader}>
          <button
            className={styles.previousbutton}
            onClick={handleDoctorReviewsClick}
          >
            <div className={styles.label}>Doctor Reviews</div>
          </button>
          <div className={styles.clinicTestimonialTitle}>
            <h1 className={styles.whatPeopleAre1}>
              What people are saying about our clinics
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.doctorReviewList}>
        <div className={styles.doctorreviews}>
          <FirstTeamReview />
          <FirstTeamReview />
          <FirstTeamReview />
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <button
            className={styles.previousbutton1}
            onClick={handleClinicReviewsClick}
          >
            <div className={styles.label1}>Clinic Reviews</div>
          </button>
          <div className={styles.bottombar}>
            <div className={styles.items}>
              <div className={styles.aboutUs}>
                <NavLink to="/aboutus" className={styles.link}>
                  About Us
                </NavLink>
              </div>

              <div className={styles.emergencyNum}>
                <a
                  href="https://tirana.embassy.qa/en/republic-of-albania/important-phones"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Emergency Numbers
                </a>
              </div>

              <div className={styles.reviews}>
                <NavLink to="/clinic-reviews" className={styles.link}>
                  Reviews
                </NavLink>
              </div>

              <div className={styles.privacyPolicy}>
                <a
                  href="https://www.freeprivacypolicy.com/live/60dc5000-d7c2-4b92-8209-cab2be28c6e3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </div>

              <div className={styles.termsOfUse}>
                <a
                  href="https://www.termsofusegenerator.net/live.php?token=cLMGUkrecP8YO0WnQqJMZZm1TxG80ll2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms Of Use
                </a>
              </div>

              <div className={styles.allRightsReserved}>
                © 2024, All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorTestimonials;
