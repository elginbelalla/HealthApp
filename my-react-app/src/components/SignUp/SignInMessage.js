import { useCallback } from "react";
import styles from "./SignInMessage.module.css";
import { useNavigate } from "react-router-dom";

const SignInMessage = () => {

  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/login")
  }, [navigate]);

  return (
    <div className={styles.signInMessage}>
      <div className={styles.alreadyHaveAn}>Already have an account?</div>
      <div className={styles.signIn} onClick={onSignInTextClick}>
        Sign In
      </div>
    </div>
  );
};

export default SignInMessage;
