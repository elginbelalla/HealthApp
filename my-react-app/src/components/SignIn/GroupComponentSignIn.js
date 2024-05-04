import React from 'react';
import styles from "./GroupComponentSignIn.module.css";

const GroupComponentSignIn = ({ formData = { email: '', password: '' }, onFormChange }) => {
  const { email, password } = formData;

  const handleInputChange = (field, value) => {
    onFormChange(field, value);
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.nameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.xhbazegmailcomWrapper}>
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={styles.xhbazegmailcom}
              />
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.signUpButton}>
          <div className={styles.passwordWrapper}>
            <div className={styles.password}>Password</div>
          </div>
          <div className={styles.signUpButtonInner}>
            <input
              type="password"
              value={password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className={styles.passwordInput}
            />
          </div>
          <div className={styles.button}></div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponentSignIn;
