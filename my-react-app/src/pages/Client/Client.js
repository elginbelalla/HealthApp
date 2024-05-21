import React, { useEffect } from "react";
import Navbar from "../../components/ClientPage/Navbar";
import FrameComponent from "../../components/ClientPage/FrameComponent";
import FrameComponent1 from "../../components/ClientPage/FrameComponent1";
import styles from "./Client.module.css";
import { NavLink } from "react-router-dom";

const Client = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY === 0) {
        navbar.style.top = '0';
      } else {
        navbar.style.top = '-5rem'; 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    </div>
  );
};

export default Client;
