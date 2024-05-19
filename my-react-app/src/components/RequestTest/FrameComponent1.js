import styles from "./FrameComponent1.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.bottombar}>
        <div className={styles.items}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.emergencyNum}>Emergency Numbers</div>
          <div className={styles.reviews}>Reviews</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
          <div className={styles.termsOfUse}>Terms of Use</div>
          <div className={styles.allRightsReserved}>© 2024, All Rights Reserved
        </div>
        </div>
     
      </div>
    </div>
  </footer>
  );
};

export default FrameComponent;
