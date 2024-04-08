import Medication from "../MedicationForm/Medication";
import styles from "./PersonalHistory.module.css";

const PersonalHistory = () => {
  return (
    <div className={styles.body}>
      <Medication
        previousMedication="Previous health-related concerns"
        listAllYourPreviousMedica="List all your previous health issues."
        inputFormGroupWidth="unset"
        inputFormGroupPosition="relative"
      />
      <Medication
        previousMedication="Previous medication"
        listAllYourPreviousMedica="List all your previous medication."
      />
      <Medication
        previousMedication="Notes"
        listAllYourPreviousMedica="List any notes you might have about your health concerns."
        inputFormGroupWidth="24.5rem"
        inputFormGroupPosition="unset"
      />
    </div>
  );
};

export default PersonalHistory;
