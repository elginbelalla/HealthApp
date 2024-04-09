import { useCallback, useState } from "react";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import Measurements from "../components/Measurements";
import PrevNextButtons from "../components/PrevNextButtons/PrevNextButtons";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  /*
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleUpdateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const onNextButtonClicked = () => {
    // Navigate to the next profile info page
    navigate("/ProfileInfo1");
  };
  */
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleUpdateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const onPreviousButtonClicked = () => {
    navigate("/");
  };

  const onNextButtonClicked = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/savePersonalInfo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/login-profile1");
      } else {
        console.error("Failed to save profile info:", await response.text());
      }
    } catch (error) {
      console.error("Failed to save profile info:", error.message);
    }
  };

  return (
    <div className={styles.profileInfo}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className={styles.contents}>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar}>
            <div className={styles.activeIndicator} />
            <div className={styles.defaultLineWrapper}>
              <div className={styles.defaultLine} />
            </div>
            <div className={styles.defaultIndicator} />
            <div className={styles.defaultLineContainer}>
              <div className={styles.defaultLine1} />
            </div>
            <div className={styles.defaultIndicator1} />
          </div>
        </div>
        <div className={styles.largeTitleParent}>
          <b className={styles.largeTitle}>Personal information</b>
            <PersonalInfo onUpdate={handleUpdateFormData} />
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
    </div>
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
      <div className={styles.exitbutton} />
    </div>
  );
};

export default ProfileInfo;
