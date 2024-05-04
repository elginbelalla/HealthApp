import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  const location = useLocation();
  const clientId = location.state ? location.state.clientId : null;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    'fullName': '',
    'gender': '',
    'dateOfBirth': '',
    'placeOfBirth': '',
    'height': '',
    'weight': ''
  });

  // Function to update form data based on input changes
  const handleUpdateFormData = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleGenderChange = (selectedGender) => {
    console.log("Selected Gender:", selectedGender);
    setFormData({
      ...formData,
      gender: selectedGender
    });
  };

  useEffect(() => {
    fetchPreviousData()
  }, []);

  // Fetch previous data if there is any, used when user goes back one page
  const fetchPreviousData = async () => {
    try {
      const response = await fetch("http://localhost/HealthApp/api/getPersonalInfo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const formattedDate = data.dateOfBirth ? formatDateForInput(data.dateOfBirth) : '';

        setFormData({
          ...formData,
          fullName: data.name || '',
          gender: data.gender || '',
          dateOfBirth: formattedDate,
          placeOfBirth: data.placeOfBirth || '',
          height: data.height || '',
          weight: data.weight || ''
        });
      } else {
        console.error("Failed to fetch previous data:", await response.text());
      }
    } catch (error) {
      console.error("Failed to fetch previous data:", error.message);
    }
  };

  const formatDateForInput = (date) => {
    const [year, month, day] = date.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };


  const validateForm = () => {
    if (formData.fullName.length === 0 || formData.gender.length === 0 || formData.dateOfBirth.length === 0 || formData.placeOfBirth.length === 0 || formData.height.length === 0 || formData.weight.length === 0) {
      alert("Please fill in all fields.");
      return false;
    }
    else
      return true;
  }


  const onNextButtonContainerClick = async () => {

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost/HealthApp/api/savePersonalInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/signup-info1");
      } else {
        console.error("Failed to save profile info:", await response.text());
      }
    } catch (error) {
      console.error("Failed to save profile info:", error.message);
    }
  };

  // Function to handle icon click and navigate to '/sign-up' route
  const handleIconClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className={styles.profile1}>
      <main className={styles.mainContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo2@2x.png"
        />
        <div className={styles.progressDetailsWrapper}>
          <div className={styles.progressDetails}>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar}>
                <div className={styles.activeIndicator} />
                <div className={styles.progressIndicator}>
                  <div className={styles.defaultLine} />
                </div>
                <div className={styles.defaultIndicator} />
                <div className={styles.progressIndicator1}>
                  <div className={styles.defaultLine1} />
                </div>
                <div className={styles.defaultIndicator1} />
              </div>
              <h1 className={styles.largeTitle}>Personal information</h1>
            </div>
            <div className={styles.body}>
              <div className={styles.measurements}>
                <h3 className={styles.personalMeasurements}>
                  Personal measurements
                </h3>
                <div className={styles.basedOnYour}>
                  Based on your data and last measurements:
                </div>
              </div>
              <div className={styles.fieldBlock}>
                <div className={styles.fieldLabel}>Full Name</div>
                <Form className={styles.contents}>
                  <Form.Control
                    name="fullName"
                    type="text"
                    value={formData['fullName']}
                    onChange={(e) => handleUpdateFormData('fullName', e.target.value)}
                  />
                </Form>
              </div>
              <div className={styles.fieldBlock1}>
                <div className={styles.fieldLabel1}>Gender</div>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => handleGenderChange(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </div>
              <div className={styles.userData}>
                <div className={styles.userDataLabels}>
                  <div className={styles.fieldLabel2}>Date of Birth</div>
                  <div className={styles.fieldLabel3}>Place of Birth</div>
                </div>
                <div className={styles.userDataValues}>
                  <Form className={styles.contents2}>
                    <Form.Control
                      name="dateOfBirth"
                      type="date"
                      onChange={(e) => handleUpdateFormData('dateOfBirth', e.target.value)}
                      defaultValue={formData.dateOfBirth || ""}
                    />
                  </Form>
                  <Form className={styles.contents3}>
                    <Form.Control
                      name="placeOfBirth"
                      type="text"
                      onChange={(e) => handleUpdateFormData('placeOfBirth', e.target.value)}
                      defaultValue={formData.placeOfBirth || ""}
                    />

                  </Form>
                </div>
              </div>
              <div className={styles.fieldBlock2}>
                <div className={styles.fieldLabel4}>Height (in cm)</div>
                <Form className={styles.contents4}>
                  <Form.Control
                    name="height"
                    type="number"
                    value={formData['height']}
                    onChange={(e) => handleUpdateFormData('height', e.target.value)}
                    defaultValue={formData.height || ""}
                  />
                </Form>
              </div>
              <div className={styles.fieldBlock3}>
                <div className={styles.fieldLabel5}>Weight (in kg)</div>
                <Form className={styles.contents5}>
                  <Form.Control
                    name="weight"
                    type="number"
                    value={formData['weight']}
                    onChange={(e) => handleUpdateFormData('weight', e.target.value)}
                    defaultValue={formData.weight || ""}
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
        {/* Adding onClick event handler to the icon */}
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" onClick={handleIconClick} />
      </main>
      <div className={styles.buttonArea}>
        <div className={styles.previousbuttonParent}>

          <div
            className={styles.nextbutton}
            onClick={onNextButtonContainerClick}
          >
            <div className={styles.label1}>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
