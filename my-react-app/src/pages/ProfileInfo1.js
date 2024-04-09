import PersonalHistory from "../components/PersonalHistory/PersonalHistory";
import PrevNextButtons from "../components/PrevNextButtons/PrevNextButtons";
import styles from "./ProfileInfo1.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const ProfileInfo1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleUpdateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const onPreviousButtonClicked = () => {
    navigate("/login-profile");
  };

  const onNextButtonClicked = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/savePersonalHealthinfo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/login-profile2");
      } else {
        console.error("Failed to save profile info:", await response.text());
      }
    } catch (error) {
      console.error("Failed to save profile info:", error.message);
    }
  };


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
              <div className={styles.activeIndicator} />
              <div className={styles.defaultIndicator}>
                <div className={styles.activeLine} />
              </div>
              <div className={styles.activeIndicator1} />
              <div className={styles.defaultIndicator1}>
                <div className={styles.defaultLine} />
              </div>
              <div className={styles.defaultIndicator2} />
            </div>
          </div>
          <div className={styles.largeTitleParent}>
            <h1 className={styles.largeTitle}>Personal health history</h1>
            <div
              className={styles.bodyText}
            >{`Fill in the data based on your health history and previous assessments.. It will take a couple of minutes. `}</div>
          </div>
          <div className={styles.bodyWrapper}>
            <PersonalHistory />
          </div>
          <div className={styles.iconContainer}>
      <div className={styles.previousbuttonParent}>
        <div
          className={styles.previousbutton}
          onClick={onPreviousButtonClicked}
        >
          <div className={styles.label}>Previous</div>
        </div>
        <div className={styles.nextbutton} 
        onClick={onNextButtonClicked}>
          <div className={styles.label1}>Next</div>
        </div>
      </div>
    </div>        </div>
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
    </div>
  );
};

export default ProfileInfo1;
