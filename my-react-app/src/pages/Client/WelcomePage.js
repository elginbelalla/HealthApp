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
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
