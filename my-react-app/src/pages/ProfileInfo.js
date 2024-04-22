import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {


  
     const location = useLocation();
     const clientId = location.state ? location.state.clientId : null;

  
    const navigate = useNavigate();
  
    const onPreviousButtonClick = useCallback(() => {
      navigate("/sign-up");
    }, [navigate]);
  

    const [formData, setFormData] = useState({
      'fullName': '',
      'gender': '',
      'dateB': '',
      'placeB': '',
      'height': '',
      'weight': ''
      
    });
  
    // Function to update form data based on input changes
    const handleUpdateFormData = (fieldName, value) => {
      setFormData({ ...formData, [fieldName]: value });
    };
  

  const onNextButtonContainerClick = async () => {
    
      // Log the payload before sending the request
      //console.log("Payload:", payload);
  
      try{
      const payload = {
        clientId: clientId, // Include clientId in the payload
      };

      const response = await fetch("http://localhost:3000/api/savePersonalInfo.php", {
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
                      onChange={(e) => handleUpdateFormData('fullName', e.target.value)}/>
                  </Form>
              </div>
              <div className={styles.fieldBlock1}>
                <div className={styles.fieldLabel1}>Gender</div>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => handleUpdateFormData("gender", e.target.value)}
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
                      name="dateB"
                      type="date"
                      value={formData['dateB']}
                      onChange={(e) => handleUpdateFormData('dateB', e.target.value)}/>
                    </Form>
                  <Form className={styles.contents3}>
                  <Form.Control 
                      name="placeB"
                      type="text"
                      value={formData['placeB']}
                      onChange={(e) => handleUpdateFormData('placeB', e.target.value)}/>
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
                      onChange={(e) => handleUpdateFormData('height', e.target.value)}/>
                  </Form>
              </div>
              <div className={styles.fieldBlock3}>
                <div className={styles.fieldLabel5}>Weight (in kg)</div>
                <Form className={styles.contents5}>
                <Form.Control 
                    name="weight"
                    type="number"
                    value={formData['weight']}
                    onChange={(e) => handleUpdateFormData('weight', e.target.value)}/>
                  </Form>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
      </main>
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
  );
};

export default ProfileInfo;
