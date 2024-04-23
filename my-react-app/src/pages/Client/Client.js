import Navbar from '../../components/ClientPage/Navbar';
import FrameComponent from '../../components/ClientPage/FrameComponent';
import FrameComponent1 from '../../components/ClientPage/FrameComponent1';
import styles from "./Client.module.css";

const Client = () => {
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
        </div>
      </section>
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
  );
};

export default Client;
