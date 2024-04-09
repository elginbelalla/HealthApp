import { useCallback } from "react";
import GroupComponent from "../components/SignUp/GroupComponent";
import { useNavigate } from "react-router-dom";
import SignInMessage from "../components/SignUp/SignInMessage";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/signup-info");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <div className={styles.frameParent}>
        <div className={styles.componentParent}>
          <GroupComponent />
          <div className={styles.signInWrapper}>
            <h1 className={styles.signIn}>Sign In</h1>
          </div>
        </div>
        <div className={styles.componentContainerWrapper}>
          <div className={styles.componentContainer}>
            <div className={styles.component1Wrapper}>
              <div
                className={styles.component1}
                onClick={onComponent1ContainerClick}
              >
                <div className={styles.component1Child} />
                <b className={styles.signUp}>Continue</b>
              </div>
            </div>
            <div className={styles.signInMessageWrapper}>
              <SignInMessage />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.doctorHoldingMedicalReportIcon}
        loading="lazy"
        alt=""
        src="/doctorholdingmedicalreporthospitalcorridor-2@2x.png"
      />
    </div>
  );
};

export default SignUpPage;
