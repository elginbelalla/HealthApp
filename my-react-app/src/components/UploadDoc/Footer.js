import React, { useState } from 'react';
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = ({ onCancelClick, selectedFiles, selectedFilesCount, id, userRole }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleUploadClick = async () => {
    if (selectedFiles.length > 0) {
      setShowPopup(true);
    
      setTimeout(async () => {
        // Redirect user after 5 seconds based on role
        try {

          const formData = new FormData();
          formData.append('userId', id);
          formData.append('userType', userRole);
          formData.append('file', selectedFiles[0]);

          const response = await fetch(
            "http://localhost/HealthApp/api/saveFiles",
            {
              method: "POST",
              body: formData,
            }
          );
    
    
          if (response.ok) {
            console.log(userRole);
            
            if (userRole === 'Doctor') {
              navigate("/doctor/dashboard", {state: {id: id}});
            } else if (userRole === 'Clinic') {
              window.location.href = '/clinic/dashboard';
            }
          } else {
            console.error("Failed to save profile info:", await response.text());
          }
        } catch (error) {
          console.error("Failed to save profile info:", error.message);
        }    
      }, 5000);
    } else {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.buttons}>
        <button className={styles.cancelbutton} onClick={onCancelClick}>
          <div className={styles.label}>Cancel</div>
        </button>
        <button className={styles.uploadButton} onClick={handleUploadClick}>
          <div className={styles.label1}>Upload</div>
        </button>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          {selectedFilesCount > 0 ? (
            <p>Redirecting you to your dashboard...</p>
          ) : (
            <p>Please select at least one file.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;
