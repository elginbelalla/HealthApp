import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <footer className={styles.aboutus}>
      <div className={styles.bottombar}>
        <div className={styles.items}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.emergencyNum}>Emergency Numbers</div>
          <div className={styles.reviews}>Reviews</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <div className={styles.termsOfUse}>Terms of Use</div>
        </div>
        <div className={styles.allRightsReserved}>
          © 2024, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Aboutus;
