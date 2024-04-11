import PersonalHistory from "../components/FamilyHistory/FamilyHistory";
import PrevNextButtons from "../components/PrevNextButtons/PrevNextButtons";
import styles from "./ProfileInfo2.module.css";

const ProfileInfo2 = () => {
  return (
    <div className={styles.profileInfo2}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo2@2x.png"
      />
      <div className={styles.profileInfo2Inner}>
        <div className={styles.progressBarParent}>
          <div className={styles.progressBar}>
            <div className={styles.progressBar1}>
              <div className={styles.activeIndicator}/>
              <div className={styles.defaultIndicator}>
                <div className={styles.activeLine} />
              </div>
              <div className={styles.activeIndicator1} />
              <div className={styles.defaultIndicator1}>
                <div className={styles.activeLine} />
              </div>
              <div className={styles.defaultIndicator2} />
            </div>
          </div>
          <div className={styles.largeTitleParent}>
            <h1 className={styles.largeTitle}>Family's health history</h1>
            <div
              className={styles.bodyText}
            >{`Fill in the data based on your family's health history and previous assessments.. It will take a couple of minutes. `}</div>
          </div>
          <div className={styles.bodyWrapper}>
            <PersonalHistory />
          </div>
          <PrevNextButtons />
        </div>
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
    </div>
  );
};

export default ProfileInfo2;