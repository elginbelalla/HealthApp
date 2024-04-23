import { useCallback } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const onAboutUsTextClick = useCallback(() => {
    // Please sync "AboutUs/Reviews" to the project
  }, []);

  const onBookAppointementTextClick = useCallback(() => {
    // Please sync "BookingPage" to the project
  }, []);

  const onRequestTestTextClick = useCallback(() => {
    // Please sync "RequestTest" to the project
  }, []);

  const onMedicalHistoryTextClick = useCallback(() => {
    // Please sync "MedicalRecords" to the project
  }, []);

  const onNutritionPlanTextClick = useCallback(() => {
    // Please sync "NutritionRecommendations" to the project
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
          <div className={styles.homePage}>Home Page</div>
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
