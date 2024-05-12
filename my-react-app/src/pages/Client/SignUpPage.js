import React, { useState } from "react";
import GroupComponent from "../../components/SignUp/GroupComponent";
import { useNavigate } from "react-router-dom";
import SignInMessage from "../../components/SignUp/SignInMessage";
import styles from "./SignUpPage.module.css";

const SignUpPage = ({ userRole }) => {
  // Receive userRole as prop
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    specialization: "",
  });

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.password.length === 0 ||
      formData.phoneNumber.length === 0
    ) {
      alert("Please fill in all fields.");
      return false;
    } else if (!emailRegex.test(formData.email)) {
      alert("Please enter a correct email format.");
      return false;
    } else if (formData.password.length < 7) {
      alert("Please make sure the password is 8 or more characters long.");
      return false;
    } else if (
      !(formData.phoneNumber.length >= 10) &&
      !(formData.phoneNumber.length <= 15)
    ) {
      alert("Please enter a valid phone number.");
      return false;
    } else return true;
  };

  const onComponent1ContainerClick = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/HealthApp/api/saveSignUpInfo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        const clientId = responseData.clientId;
        if (formData.role === "User") {
          console.log(clientId);
          navigate("/signup-info", { state: { clientId: clientId } });
        } else if (formData.role === "Doctor" || formData.role === "Clinic") {
          const doctorId = responseData.doctorId;
          console.log(doctorId);
          navigate("/upload-documents", { state: { doctorId: doctorId, role: formData.role } });
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
      [field]: value,
    });
  };

  const handleRoleChange = (selectedRole) => {
    console.log("Selected role:", selectedRole);
    setFormData({
      ...formData,
      role: selectedRole,
    });
  };

  return (
    <div className={styles.signUpPage}>
      <div className={styles.frameParent}>
        <div className={styles.componentParent}>
          <GroupComponent
            formData={formData}
            onFormChange={handleFormChange}
            updateRole={handleRoleChange}
          />
          <div className={styles.signInWrapper}>
            <h1 className={styles.signIn}>Sign Up</h1>
          </div>
        </div>
        <div className={styles.componentContainerWrapper}>
          <div className={styles.componentContainer}>
            <div className={styles.component1Wrapper}>
              <div
                className={styles.component1}
                onClick={onComponent1ContainerClick}
              >
                <div className={styles.component1Child}>
                  <span className={styles.signUp}>Continue</span>
                </div>
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
      {/* Don't render Footer component */}
    </div>
  );
};

export default SignUpPage;
