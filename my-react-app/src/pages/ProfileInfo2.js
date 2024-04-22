import React, { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileInfo2.module.css";

const ProfileInfo2 = () => {
  const navigate = useNavigate();

  // Initialize formData state with default values
  const [formData, setFormData] = useState({
    'prev-health-issues': '',
    'prev-medication': '',
    'other-notes': ''
  });

  // Function to update form data based on input changes
  const handleUpdateFormData = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  // Callback function for the previous button click
  const onPreviousButtonClick = useCallback(() => {
    navigate("/signup-info1");
  }, [navigate]);

  // Callback function for the next button click
  const onNextButtonContainerClick = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/savePersonalHealthinfo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/login");
      } else {
        console.error("Failed to save profile info:", await response.text());
      }
    } catch (error) {
      console.error("Failed to save profile info:", error.message);
    }
  }, [formData, navigate]);

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
            <h1 className={styles.largeTitle}>Family health history</h1>
            <div className={styles.bodyText}>
              Fill in the data based on the health history and previous assessments of your family members. It will take a couple of minutes.
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
                    List all your family members' health issues.
                  </div>
                </div>
                <Form.Group className={styles.inputFormgroup}>
                  <Form.Control
                    name="prev-health-issues"
                    as="textarea"
                    value={formData['prev-health-issues']}
                    onChange={(e) => handleUpdateFormData('prev-health-issues', e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className={styles.medication}>
                <div className={styles.previousMedicationParent}>
                  <h3 className={styles.previousMedication}>
                    Previous medication
                  </h3>
                  <div className={styles.listAllYour1}>
                    List all your family members' previous medication.
                  </div>
                </div>
                <Form.Group className={styles.inputFormgroup1}>
                  <Form.Control
                    name="prev-medication"
                    as="textarea"
                    value={formData['prev-medication']}
                    onChange={(e) => handleUpdateFormData('prev-medication', e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className={styles.notes}>
                <div className={styles.notesParent}>
                  <h3 className={styles.notes1}>Notes</h3>
                  <div className={styles.listAnyNotes}>
                    List any notes you might have about your family members' health concerns.
                  </div>
                </div>
                <Form.Group className={styles.inputFormgroup2}>
                  <Form.Control
                    name="other-notes"
                    as="textarea"
                    value={formData['other-notes']}
                    onChange={(e) => handleUpdateFormData('other-notes', e.target.value)}
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
      <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
    </div>
  );
};

export default ProfileInfo2;