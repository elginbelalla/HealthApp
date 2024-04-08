import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./Measurements.module.css";
import { useState } from "react";

const Measurements = ({ onUpdate }) => {
  const[height, setHeight] = useState('')
  const[weight, setWeight] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
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
    <div className={styles.measurements}>
        <div className={styles.fieldLabelParent}>
        <div className={styles.fieldLabel}>Height ( in cm )</div>
         <Form className={styles.contents}>
            <Form.Control 
            type="text" 
            name="height"
            value= {height}
            onChange={handleInputChange}  />
          </Form>
          
          
          <div className={styles.fieldLabel1}>Weight ( in kg )</div>
          <Form className={styles.contents}>
            <Form.Control 
            type="text" 
            name="weight"
            value={weight}
            onChange={handleInputChange} />
          </Form>
        </div>
      </div>
    
  );
};

export default Measurements;
