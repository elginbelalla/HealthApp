import React from "react";
import Navbar from "../../components/ClientPage/Navbar";
import FrameComponent from "../../components/ClientPage/FrameComponent";
import FrameComponent1 from "../../components/ClientPage/FrameComponent1";
import styles from "./Client.module.css";

const Client = () => {
  
  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div className={styles.client}>
      <Navbar />
      <section className={styles.accessYourHealthcareAnywheWrapper}>
        <h1 className={styles.accessYourHealthcare}>
          Access your healthcare, anywhere, anytime!
        </h1>
      </section>
      <img className={styles.rela1Icon} alt="" src="/rela-1@2x.png" />
      <section className={styles.clientInner}>
        <div className={styles.frameParent}>
          <div className={styles.whatCanWeHelpYouWithTodaWrapper}>
            <h1 className={styles.whatCanWe}>
              What can we help you with today?
            </h1>
          </div>
          <FrameComponent1 />
          <div className={styles.notFindingWhatYouAreLookiWrapper}>
            <h1 className={styles.notFindingWhat}>
              Not finding what you are looking for?
            </h1>
          </div>
          <FrameComponent />
          <div className={styles.component1}>
          <button className={styles.buttonShape} onClick={handleSubmit} />
                  <div className={styles.submit} onClick={handleSubmit}>Submit</div>

          </div>
        </div>
      </section>
      <div className={styles.bottombarWrapper}>
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
    </div>
  );
};

export default Client;
