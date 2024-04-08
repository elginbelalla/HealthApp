import Medication from "../MedicationForm/Medication";
import styles from "../PersonalHistory/PersonalHistory.module.css";

const PersonalHistory = () => {
  return (
    <div className={styles.body}>
      <Medication
        previousMedication="Previous health-related concerns"
        listAllYourPreviousMedica="List all your family member's previous health issues."
        inputFormGroupWidth="unset"
        inputFormGroupPosition="relative"
      />
      <Medication
        previousMedication="Previous medication"
        listAllYourPreviousMedica="List all your family member's previous medication."
      />
      <Medication
        previousMedication="Notes"
        listAllYourPreviousMedica="List any notes you might have about your family member's health concerns."
        inputFormGroupWidth="24.5rem"
        inputFormGroupPosition="unset"
      />
    </div>
  );
};

export default PersonalHistory;
