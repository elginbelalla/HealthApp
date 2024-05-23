import styles from "./FrameComponent1.module.css";
import { useNavigate } from 'react-router-dom';

const FrameComponent1 = () => {

  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/booking-page');
  };

  const handleAccessHistory = () => {
    navigate('/medical-records');
  };

  return (
    <div className={styles.servicesWrapper}>
      <div className={styles.services}>
        <div className={styles.bookappointement}>
          <div className={styles.iconStethoscopeWrapper}>
            <img
              className={styles.iconStethoscope}
              loading="lazy"
              alt=""
              src="/-icon-stethoscope.svg"
            />
          </div>
          <div className={styles.bookAnAppointmentParent} onClick={handleBookAppointment}>
            <div
              className={styles.bookAnAppointment}  
            >{`Book an appointment `}</div>
            <div className={styles.bookAnAppointmentWithOurPWrapper}>
              <div className={styles.bookAnAppointment1}>
                Book an appointment with our professional healthcare providers
                who are dedicated to your well-being and ready to provide you
                with personalized care tailored to your needs.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.medicalhistory} onClick={handleAccessHistory}> 
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          <div className={styles.accessYouHistoryParent}>
            <div className={styles.accessYouHistory}>Access you history</div>
            <div className={styles.gainInstantAccess}>
              Gain instant access to your complete medical history, enabling you
              to track your health journey comprehensively and make informed
              decisions with confidence. With just a few clicks, stay empowered
              and in control of your well-being.
            </div>
          </div>
        </div>
        <div className={styles.nutrition}>
          <div>
            <img
              className={styles.healthiconsnutritionOutline}
              loading="lazy"
              alt=""
              src="/healthiconsnutritionoutline.svg"
            />
          </div>
          <div className={styles.requestNutritionAdvice}>
            Request nutrition advice
          </div>
          <div className={styles.unlockPersonalizedNutritionWrapper}>
            <div className={styles.unlockPersonalizedNutrition}>
              Unlock personalized nutrition recommendations tailored to your
              unique needs and goals. Receive expert guidance on optimizing your
              diet for better health and vitality.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
