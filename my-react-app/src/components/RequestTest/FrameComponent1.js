import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent = () => {
  return (
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
  );
};

export default FrameComponent;
