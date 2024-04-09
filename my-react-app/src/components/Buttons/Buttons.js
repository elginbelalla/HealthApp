import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Buttons.module.css";

const Buttons = () => {
  
  const navigate = useNavigate();


  const onSignUpClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  const onLogInClick = useCallback(() => {
    navigate("/login");
  }, []);


  return (
    <div className={styles.buttons}>
      <button className={styles.guest}>
        <div className={styles.guest1}>Guest</div>
      </button>
      <button className={styles.guest} onClick={onSignUpClick}>
        <div className={styles.guest1}>Sign Up</div>
      </button>
      <button className={styles.guest} onClick={onLogInClick}>
        <div className={styles.guest1}>Log In</div>
      </button>
    </div>
  );
};

export default Buttons;
