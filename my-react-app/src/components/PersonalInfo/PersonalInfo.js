import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./PersonalInfo.module.css";
import { useState } from "react";




const PersonalInfo = ({ onUpdate }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateB, setDateOfBirth] = useState("");
  const [placeB, setPlaceOfBirth] = useState("");
  const[height, setHeight] = useState('');
  const[weight, setWeight] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Update the state based on the input name
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "dateB":
        const formattedDate = value.split('-').reverse().join('/');
        setDateOfBirth(formattedDate);
        break;
      case "placeB":
        setPlaceOfBirth(value);
        break;
      case "height":
        setHeight(value);
        break;
      case "weight":
        setWeight(value);
        break;
      default:
        break;
    }
  
    onUpdate({ [name]: value });
  };

  return (
    <div className={styles.personalinfo}>
      <div className={styles.personalMeasurementsParent}>
        <div className={styles.personalMeasurements}>Personal measurements</div>
        <div className={styles.basedOnYour}>
          Based on your data and last measurements:
        </div>
      </div>

      <div className={styles.fieldLabelParent}>
        <div className={styles.fieldLabel}>First name</div>
        <Form className={styles.contents}>
        <Form.Control
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
        </Form>
      </div>
      <div className={styles.fieldLabelGroup}>
        <div className={styles.fieldLabel1}>Last name</div>
        <Form className={styles.contents1}>
          <Form.Control 
          type="text" 
          name="lastName" 
          value={lastName} 
          onChange={handleInputChange}
          />
        </Form>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.fieldLabelContainer}>
          <div className={styles.fieldLabel2}>Date of Birth</div>
          
          <div className={styles.fieldLabel3}>Place of Birth</div>
        </div>
        <div className={styles.nextButtonLabel}>
          <Form className={styles.contents2}>
            <Form.Control 
            type="text" 
            name="dateB" 
            value={dateB} 
            onChange={handleInputChange}/>
          </Form>
          <Form className={styles.contents3}>
            <Form.Control 
            type="text" 
            name="placeB" 
            value={placeB} 
            onChange={handleInputChange} />
          </Form>
        </div>
      </div>
 
      <div className={styles.fieldLabelGroup}>
        <div className={styles.fieldLabel1}>Height ( in cm )</div>
        <Form className={styles.contents1}>
        <Form.Control 
            type="text" 
            name="height"
            value= {height}
            onChange={handleInputChange}  />
          </Form>
      </div>

      <div className={styles.fieldLabelGroup}>
        <div className={styles.fieldLabel1}>Weight ( in kg )</div>
        <Form className={styles.contents1}>
        <Form.Control 
            type="text" 
            name="weight"
            value= {weight}
            onChange={handleInputChange}  />
          </Form>
      </div>
    
    </div>
  );
};

export default PersonalInfo;
