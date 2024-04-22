import React from "react";
import GroupComponentSignIn from "../../components/SignIn/GroupComponentSignIn";
import RectangleComponent from "../../components/SignIn/RectangleComponent";
import { Link } from "react-router-dom"; // Change import to Link from react-router-dom
import styles from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div className={styles.signinpage}>
      <div className={styles.signinpageInner}>
        <div className={styles.frameParent}>
          <div className={styles.instanceParent}>
            <GroupComponentSignIn />
            <RectangleComponent />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.component1Wrapper}>
                <div className={styles.component1}>
                  <div className={styles.component1Child} />
                  <b className={styles.continue}>Continue</b>
                </div>
              </div>
              <div className={styles.signInMessage}>
                <div className={styles.alreadyHaveAn}>
                  Don’t have an account?
                </div>
                {/* Replace div with Link */}
                <Link className={styles.signIn} to="/sign-up">
                  Sign Up
                </Link>
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
