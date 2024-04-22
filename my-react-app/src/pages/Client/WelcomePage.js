import Buttons from "../../components/Buttons/Buttons.js";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {

  return (
    <div className={styles.welcomepage}>
      <section className={styles.navBar}>
        <header className={styles.navBar1}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className={styles.navBarInner}>
            <div className={styles.aboutusParent}>
              <button className={styles.aboutus}>
                <div className={styles.aboutUs}>About Us</div>
              </button>
              <button className={styles.support}>
                <div className={styles.support1}>Support</div>
              </button>
            </div>
          </div>
        </header>
      </section>
      <section className={styles.welcomepageInner}>
        <div className={styles.sloganParent}>
          <div className={styles.slogan}>
          <section className={styles.logoName}>
            <h1 className={styles.medinteract}>MedInteract</h1>
             </section>
            <div className={styles.bodyParent}>
              <div className={styles.body}>
                <div className={styles.guestSignUpLogIn}>
                  <h1 className={styles.slogan1}>
                    Improving health, one interaction at a time!
                  </h1>
                </div>
                <h2 className={styles.description}>
                  Thank you for being here! Continue browsing our platform.
                </h2>
              </div>
              <div className={styles.supportButton}>
                <Buttons />
              </div>
            </div>
          </div>
          <div className={styles.bottombar}>
            <div className={styles.items}>
              <div className={styles.aboutUs1}>About Us</div>
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
      </section>
    </div>
  );
};

export default WelcomePage;
