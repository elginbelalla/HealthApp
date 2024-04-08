import { useCallback } from "react";
import styles from "./SignInMessage.module.css";

const SignInMessage = () => {
  const onSignInTextClick = useCallback(() => {
    // Please sync "Sign In Page" to the project
  }, []);

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
