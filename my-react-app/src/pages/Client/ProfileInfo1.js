import React, { useState, useCallback, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileInfo1.module.css";

const ProfileInfo1 = () => {
  const navigate = useNavigate();

  // Initialize formData state with default values
  const [formData, setFormData] = useState({
    'healthConcerns': '',
    'previousMedication': '',
    'notes': ''
  });

  // Function to update form data based on input changes
  const handleUpdateFormData = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  useEffect(() => {
    fetchPreviousData();
  }, []);

  // Fetch previous data if there is any, used when user goes back one page
  const fetchPreviousData = async () => {
    try {
      const response = await fetch("http://localhost/HealthApp/api/getPersonalHealth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(data);
      } else {
        console.error("Failed to fetch previous data:", await response.text());
      }
    } catch (error) {
      console.error("Failed to fetch previous data:", error.message);
    }
  };

  // Callback function for the previous button click
  const onPreviousButtonClick = useCallback(() => {
    navigate("/signup-info");
  }, [navigate]);

  // Callback function for the next button click
  const onNextButtonContainerClick = useCallback(async () => {
    try {
      const response = await fetch("http://localhost/HealthApp/api/savePersonalHealth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/signup-info2");
      } else {
        console.error("Failed to save profile info:", await response.text());
      }
    } catch (error) {
      console.error("Failed to save profile info:", error.message);
    }
  }, [formData, navigate]);

  // Function to handle icon click and navigate to '/sign-up' route
  const handleIconClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className={styles.profileInfo2}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo2@2x.png"
      />
      <div className={styles.progressAreaWrapper}>
        <div className={styles.progressArea}>
          <div className={styles.progressBar}>
            <div className={styles.progressBar1}>
              <div className={styles.activeIndicator} />
              <div className={styles.activeLineWrapper}>
                <div className={styles.activeLine} />
              </div>
              <div className={styles.activeIndicator1} />
              <div className={styles.defaultLineWrapper}>
                <div className={styles.defaultLine} />
              </div>
              <div className={styles.defaultIndicator} />
            </div>
          </div>
          <div className={styles.infoArea}>
            <h1 className={styles.largeTitle}>Personal health history</h1>
            <div className={styles.bodyText}>
              {`Fill in the data based on your health history and previous assessments.. It will take a couple of minutes. `}
            </div>
          </div>
          <div className={styles.informationArea}>
            <form className={styles.body}>
              <div className={styles.concerns}>
                <div className={styles.previousHealthRelatedConcerParent}>
                  <h3 className={styles.previousHealthRelatedConcer}>
                    Previous health-related concerns
                  </h3>
                  <div className={styles.listAllYour}>
                    List all your previous health issues.
                  </div>
                </div>
                <Form.Group className={styles.inputFormgroup}>
                  <Form.Control
                    name="healthConcerns"
                    as="textarea"
                    value={formData["healthConcerns"]}
                    onChange={(e) =>
                      handleUpdateFormData("healthConcerns", e.target.value)
                    }
                    defaultValue={formData.healthConcerns || ""}
                  />
                </Form.Group>
              </div>
              <div className={styles.medication}>
                <div className={styles.previousMedicationParent}>
                  <h3 className={styles.previousMedication}>
                    Previous medication
                  </h3>
                  <div className={styles.listAllYour1}>
                    List all your previous medication.
                  </div>
                </div>
                <Form.Group className={styles.inputFormgroup1}>
                  <Form.Control
                    name="previousMedication"
                    as="textarea"
                    value={formData["previousMedication"]}
                    onChange={(e) =>
                      handleUpdateFormData("previousMedication", e.target.value)
                    }
                  />
                </Form.Group>
              </div>
              <div className={styles.notes}>
                <div className={styles.notesParent}>
                  <h3 className={styles.notes1}>Notes</h3>
                  <div className={styles.listAnyNotes}>
                    List any notes you might have about your health concerns.
                  </div>
                </div>
                <Form.Group className={styles.inputFormgroup2}>
                  <Form.Control
                    name="notes"
                    as="textarea"
                    value={formData["notes"]}
                    onChange={(e) =>
                      handleUpdateFormData("notes", e.target.value)
                    }
                  />
                </Form.Group>
              </div>
            </form>
          </div>
          <div className={styles.buttonArea}>
            <div className={styles.previousbuttonParent}>
              <button
                className={styles.previousbutton}
                onClick={onPreviousButtonClick}
              >
                <div className={styles.label}>Previous</div>
              </button>
              <div
                className={styles.nextbutton}
                onClick={onNextButtonContainerClick}
              >
                <div className={styles.label1}>Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Adding onClick event handler to the icon */}
      <img
        className={styles.icon}
        loading="lazy"
        alt=""
        src="/icon.svg"
        onClick={handleIconClick}
      />
    </div>
  );
};

export default ProfileInfo1;
