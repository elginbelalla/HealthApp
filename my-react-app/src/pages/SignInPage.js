import { useCallback } from "react";
import GroupComponent from "../components/SignIn/GroupComponent";
import RectangleComponent from "../components/SignIn/RectangleComponent";
import { useNavigate } from "react-router-dom";
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/profile-info");
  }, [navigate]);

  return (
    <div className={styles.signinpage}>
      <div className={styles.signinpageInner}>
        <div className={styles.frameParent}>
          <div className={styles.instanceParent}>
            <GroupComponent />
            <RectangleComponent />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.component1Wrapper}>
                <div
                  className={styles.component1}
                  onClick={onComponent1ContainerClick}
                >
                  <div className={styles.component1Child} />
                  <b className={styles.continue}>Continue</b>
                </div>
              </div>
              <div className={styles.signInMessage}>
                <div className={styles.alreadyHaveAn}>
                  Don’t have an account?
                </div>
                <div className={styles.signIn}>Sign Up</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.signinpageChild}
        loading="lazy"
        alt=""
        src="/frame-16@2x.png"
      />
    </div>
  );
};

export default SignInPage;
