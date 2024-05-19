import Navbar from "../../components/ClientPage/Navbar";
import Result1 from "../../components/MedicalHistory/Result1";
import FontistolaboratoryIcon from "../../components/MedicalHistory/FontistolaboratoryIcon";
import styles from "./MedicalRecords.module.css";

const MedicalRecords = () => {
  return (
    <div className={styles.medicalrecords}>
      <Navbar />
      <main className={styles.content}>
        <section className={styles.medicalHistoryContentParent}>
          <div className={styles.medicalHistoryContent}>
            <div className={styles.medicalHistoryAccessContainer}>
              <span className={styles.medicalHistoryAccessContainer1}>
                <p className={styles.medicalHistory}>Medical History</p>
                <p className={styles.accessAndExamine}>
                  Access and examine your past conditions
                </p>
              </span>
            </div>
          </div>
          <div className={styles.result1Parent}>
            <Result1 testResult1="Test Result 1" />
            <div className={styles.result2}>
              <div className={styles.frameParent}>
                <div className={styles.fontistolaboratoryContainer}>
                  <FontistolaboratoryIcon fontistolaboratory="/fontistolaboratory-1.svg" />
                </div>
                <div className={styles.testResult2}>Test Result 2</div>
              </div>
              <div className={styles.clinicClinicAContainer}>
                <span className={styles.clinicClinicAContainer1}>
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
                </span>
              </div>
            </div>
            <Result1
              testResult1="Test Result 3"
            />
            <Result1 testResult1="Test Result 4" />
            <div className={styles.result2}>
              <div className={styles.fontistolaboratoryContainer}>
                <FontistolaboratoryIcon fontistolaboratory="/fontistolaboratory-1.svg" />
              </div>
              <div className={styles.testResult5Parent}>
                <div className={styles.testResult5}>Test Result 5</div>
                <div className={styles.clinicClinicAContainer2}>
                  <span className={styles.clinicClinicAContainer3}>
                    <p className={styles.clinicClinicA}>
                      <b className={styles.clinic}>Clinic:</b>
                      <span> Clinic A</span>
                    </p>
                    <p className={styles.doctorDoctorA}>
                      <b className={styles.doctor1}>Doctor:</b>
                      <span> Doctor A</span>
                    </p>
                    <p className={styles.testTestA}>
                      <b className={styles.test1}>Test:</b>
                      <span> Test A</span>
                    </p>
                    <p className={styles.resultsThisIsARandomResu}>
                      <b className={styles.results1}>Results:</b>
                      <span> This is a random result</span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <Result1
              testResult1="Test Result 6"
            />
          </div>
        </section>
      </main>
        <div className={styles.bottombar}>
          <div className={styles.items}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.emergencyNum}>Emergency Numbers</div>
            <div className={styles.reviews}>Reviews</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.termsOfUse}>Terms of Use</div>
          </div>
          <div className={styles.allRightsReserved}>
            © 2024, All Rights Reserved
          </div>
        </div>
    </div>
  );
};

export default MedicalRecords;
