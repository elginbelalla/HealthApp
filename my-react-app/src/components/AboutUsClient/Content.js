import TeenyiconstickCircleSolid from "./TeenyiconstickCircleSolid";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.aboutUsHeader}>
        <div className={styles.aboutUsDiscoverContainer}>
          <span className={styles.aboutUsDiscoverContainer1}>
            <p className={styles.aboutUs}>About Us</p>
          </span>
        </div>
      </div>
      <div className={styles.featureListParent}>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <div className={styles.entry}>
              <h1 className={styles.healthcareAtYour}>
                Healthcare at your fingertips
              </h1>
              <div className={styles.ourJourneyBegan}>
                Our journey began with a vision to transform healthcare
                delivery. With a rich history rooted in a vision to
                revolutionize the healthcare landscape, our platform has evolved
                to offer meticulously crafted services designed to meet your
                needs with precision and efficiency. Today, we stand committed
                to advancing healthcare accessibility and empowering individuals
                to take control of their well-being. We continue to lead the way
                towards a healthier future, leveraging innovation and expertise
                to drive positive change in healthcare.
              </div>
            </div>
            <div className={styles.second}>
              <img
                className={styles.featureIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className={styles.intelligentAssistanceFromContainer}>
                <span className={styles.intelligentAssistanceFromContainer1}>
                  <p className={styles.intelligentAssistance}>
                    Intelligent Assistance
                  </p>
                  <p className={styles.fromExpertConsultations}>
                    From expert consultations to real-time symptom tracking and
                    personalized nutrition recommendations, we deliver
                    comprehensive solutions tailored to your individual
                    requirements.
                  </p>
                </span>
              </div>
            </div>
            <div className={styles.first}>
              <TeenyiconstickCircleSolid />
              <div className={styles.cuttingEdgeServicesFromContainer}>
                <span className={styles.cuttingEdgeServicesFromContainer1}>
                  <p className={styles.cuttingEdgeServices}>
                    Cutting-Edge Services
                  </p>
                  <p className={styles.fromExpertConsultations1}>
                    From expert consultations to real-time symptom tracking and
                    personalized nutrition recommendations, we deliver
                    comprehensive solutions tailored to your individual
                    requirements.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.thinkingImage}>
            <div className={styles.image}>
                <img
                  className={styles.thinking1Icon}
                  loading="lazy"
                  alt=""
                  src="/aboutus.png"
                />
            </div>
          </div>
        </div>
        <div className={styles.third}>
          <img
            className={styles.communicationIcon}
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.communicationDescription}>
            <div className={styles.secureCommunicationFromContainer}>
              <p className={styles.secureCommunication}>Secure Communication</p>
              <p className={styles.fromExpertConsultations2}>
                From expert consultations to real-time symptom tracking and
                personalized nutrition recommendations, we deliver comprehensive
                solutions tailored to your individual requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
