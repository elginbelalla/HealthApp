import React, { useState } from 'react';
import styles from "./Footer.module.css";

const Footer = ({ onCancelClick, selectedFilesCount, userRole }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleUploadClick = () => {
    if (selectedFilesCount > 0) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        // Redirect user after 5 seconds based on role
        if (userRole === 'doctor') {
          window.location.href = '/doctor/dashboard';
        } else if (userRole === 'clinic') {
          window.location.href = '/clinic/dashboard';
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
