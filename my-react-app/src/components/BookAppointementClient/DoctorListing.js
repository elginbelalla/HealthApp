import DoctorA from "./DoctorA";
import styles from "./ClinicListing.module.css";
import { NavLink } from "react-router-dom";


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
    </section>
  );
};

export default DoctorListing;
