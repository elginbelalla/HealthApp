import React, { useState } from "react";
import styles from "./GroupComponentSignIn.module.css";

const GroupComponentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
                onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
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
