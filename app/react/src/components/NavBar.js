import { useCallback } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const onHomePageTextClick = useCallback(() => {
    // Please sync "Client" to the project
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    // Please sync "AboutUs/Reviews" to the project
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
      <img className={styles.navbarChild} alt="" src="/img/rectangle-4198.svg" />
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/img/logo@2x.png"
      />
      <div className={styles.navbarInner}>
        <div className={styles.homePageParent}>
          <div className={styles.homePage} onClick={onHomePageTextClick}>
            Home Page
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div className={styles.bookAppointement}>Book Appointement</div>
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
        </div>
      </div>
      <img className={styles.userIcon} loading="lazy" alt="" src="/img/user.svg" />
    </header>
  );
};

export default NavBar;
