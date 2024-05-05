import DoctorA from "./DoctorA";
import styles from "./ClinicListing.module.css";

const DoctorListing = () => {
  return (
    <section className={styles.clinicListing}>
      <div className={styles.clinicOptions}>
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1@2x.png"
          doctorA="DoctorA"
        />
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1-1@2x.png"
          doctorA="DoctorB"
        />
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1-1@2x.png"
          doctorA="DoctorC"
        />
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1-1@2x.png"
          doctorA="DoctorD"
        />
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1-1@2x.png"
          doctorA="DoctorE"
        />
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1-1@2x.png"
          doctorA="DoctorF"
        />
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1-1@2x.png"
          doctorA="DoctorH"
        />
        <DoctorA
          d17c77810d0afc9bdb1cb7fbd="/3d17c77810d0afc9bdb1cb7fbd1aef2d-1-1@2x.png"
          doctorA="DoctorG"
        />
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
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
          </div>
        </footer>
      </div>
    </section>
  );
};

export default DoctorListing;
