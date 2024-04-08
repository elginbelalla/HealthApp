import { useCallback } from "react";
import styles from "./Buttons.module.css";

const Buttons = () => {
  
  const onSignUpClick = useCallback(() => {
    // Please sync "Sign Up Page" to the project
  }, []);

  const onLogInClick = useCallback(() => {
    // Please sync "Sign In Page" to the project
  }, []);


  return (
    <div className={styles.buttons}>
      <button className={styles.guest}>
        <div className={styles.guest1}>Guest</div>
      </button>
      <button className={styles.signup} onClick={onSignUpClick}>
        <div className={styles.signUp}>Sign Up</div>
      </button>
      <button className={styles.login} onClick={onLogInClick}>
        <div className={styles.logIn}>Log In</div>
      </button>
    </div>
  );
};

export default Buttons;
