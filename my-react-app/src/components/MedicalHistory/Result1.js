import { useMemo } from "react";
import FontistolaboratoryIcon from "./FontistolaboratoryIcon";
import styles from "./Result1.module.css";

const Result1 = ({
  testResult1,
  resultsThisIsARandomResuPadding,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const result1Style = useMemo(() => {
    return {
      padding: resultsThisIsARandomResuPadding,
    };
  }, [resultsThisIsARandomResuPadding]);

  const clinicTestStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div className={styles.result1} style={result1Style}>
      <div className={styles.resultCategory}>
        <div className={styles.labTest}>
          <FontistolaboratoryIcon fontistolaboratory="/fontistolaboratory.svg" />
        </div>
        <div className={styles.testResult1}>{testResult1}</div>
      </div>
      <div className={styles.clinicTest} style={clinicTestStyle}>
        <div className={styles.clinicClinicAContainer}>
          <p className={styles.clinicClinicA}>
            <b className={styles.clinic}>Clinic:</b>
            <span> Clinic A</span>
          </p>
          <p className={styles.doctorDoctorA}>
            <b className={styles.doctor}>Doctor:</b>
            <span> Doctor A</span>
          </p>
          <p className={styles.testTestA}>
            <b className={styles.test}>Test:</b>
            <span> Test A</span>
          </p>
          <p className={styles.resultsThisIsARandomResu}>
            <b className={styles.results}>Results:</b>
            <span> This is a random result</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result1;
