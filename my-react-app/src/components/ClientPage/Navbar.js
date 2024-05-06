import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const navigate = useNavigate();

  const onHomePageTextClick = useCallback(() => {
    navigate("/clientpage");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onBookAppointementTextClick = useCallback(() => {
    navigate("/booking-page");
  }, [navigate]);

  const onRequestTestTextClick = useCallback(() => {
    navigate("/request-test");
  }, [navigate]);

  const onMedicalHistoryTextClick = useCallback(() => {
    
  }, []);

  const onNutritionPlanTextClick = useCallback(() => {
    
  }, []);

  return (
    <header className={styles.navbar}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <nav className={styles.topBar}>
        <nav className={styles.homePageParent}>
        <div className={styles.homePage} onClick={onHomePageTextClick}>
            Home Page
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div
            className={styles.bookAppointement}
            onClick={onBookAppointementTextClick}
          >
            Book Appointement
          </div>
          <div className={styles.requestTest} onClick={onRequestTestTextClick}>
            Request Test
          </div>
          <div
            className={styles.medicalHistory}
            onClick={onMedicalHistoryTextClick}
          >
            Medical History
          </div>
          <div
            className={styles.nutritionPlan}
            onClick={onNutritionPlanTextClick}
          >
            Nutrition Plan
          </div>
        </nav>
      </nav>
      <div className={styles.userWrapper}>
        <img
          className={styles.userIcon}
          loading="lazy"
          alt=""
          src="/user.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;
