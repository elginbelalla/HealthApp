import { useCallback, useState } from "react";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ProfileInfo.module.css";


const ProfileInfo = () => {
  
  const location = useLocation();
  const clientId = location.state ? location.state.clientId : null;


  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    dateB: '',
    placeB: '',
    height: '',
    weight: ''
  });

  const navigate = useNavigate();

  const handleUpdatePersonalInfo = (newData) => {
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      ...newData,
    }));
  };

  const onPreviousButtonClicked = () => {
    navigate("/signup");
  };

  const onNextButtonClicked = async () => {
    
      // Log the payload before sending the request
      //console.log("Payload:", payload);
  
      try{
      const payload = {
        clientId: clientId, // Include clientId in the payload
        personalInfo: personalInfo
      };

      const response = await fetch("http://localhost:3000/api/savePersonalInfo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personalInfo),
      });
      if (response.ok) {
        navigate("/signup-info1");
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
            <PersonalInfo onUpdate={handleUpdatePersonalInfo} />
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
