import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./Medication.module.css";

const Medication = ({
  previousMedication,
  listAllYourPreviousMedica,
  inputFormGroupWidth,
  inputFormGroupPosition,
}) => {
  const inputFormGroupStyle = useMemo(() => {
    return {
      width: inputFormGroupWidth,
      position: inputFormGroupPosition,
    };
  }, [inputFormGroupWidth, inputFormGroupPosition]);

  return (
    <div className={styles.medication}>
      <div className={styles.previousMedicationParent}>
        <h3 className={styles.previousMedication}>{previousMedication}</h3>
        <div className={styles.listAllYour}>{listAllYourPreviousMedica}</div>
      </div>
      <Form.Group className={styles.inputFormgroup} style={inputFormGroupStyle}>
        <Form.Control as="textarea" defaultValue="" />
      </Form.Group>
    </div>
  );
};

export default Medication;
