import React, { useState } from "react";
import GroupComponentSignIn from "../../components/SignIn/GroupComponentSignIn";
import RectangleComponent from "../../components/SignIn/RectangleComponent";
import { Link } from "react-router-dom"; // Change import to Link from react-router-dom
import styles from "./SignInPage.module.css";
import { useNavigate } from "react-router-dom";


const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });



  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email.length === 0 || formData.password.length === 0) {
      alert("Please fill in all fields.");
      return false;
    }
    else if (!emailRegex.test(formData.email)) {
      alert("Please enter a correct email format.");
      return false;
    }
    else if (formData.password.length < 7) {
      alert("Please make sure the password is 8 or more characters long.")
      return false;
    }
    else
      return true;
  }



  const onComponent1ContainerClick = async () => {

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost/HealthApp/api/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.id);

        if (data.success) {

          switch (data.role) {
            case "client":
              navigate("/clientpage");
              break;
            case "doctor":
              navigate("/doctor/dashboard", { state: { id: data.id } });
              break;
            case "clinic":
              navigate("/");  // TODO: add the clinic's main page url
              break;
            default:
              alert("User not found");
              break;
          }
        } else {
          alert(data.message); // Show error message if login failed
        }
      } else {
        console.error("Failed to save profile info:", await response.text());
      }
    } catch (error) {
      console.error("Failed to save profile info:", error.message);
    }
  };


  const handleFormChange = (field, value) => {
    console.log("Selected value:", value);
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const test = () => {
    console.log("Email: " + formData.email);
    console.log("Password: " + formData.password);
  }


  return (
    <div className={styles.signinpage}>
      <div className={styles.signinpageInner}>
        <div className={styles.frameParent}>
          <div className={styles.instanceParent}>
            <GroupComponentSignIn formData={formData} onFormChange={handleFormChange} />
            <RectangleComponent />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.component1Wrapper} onClick={() => {
                onComponent1ContainerClick();
                test();
              }}>
                <div className={styles.component1}>
                  <div className={styles.component1Child} />
                  <b className={styles.continue}>Continue</b>
                </div>
              </div>
              <div className={styles.signInMessage}>
                <div className={styles.alreadyHaveAn}>
                  Don’t have an account?
                </div>
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