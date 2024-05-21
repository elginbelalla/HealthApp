import { useMemo } from "react";
import styles from "./ClinicA.module.css";

const ClinicA = ({
  pngtreemedicalLogoVector9,
  clinicA,
  propPadding,
  propMinWidth,
  id,
}) => {
  const clinicAStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const clinicA1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const handleBookTextClick = () => {
    const fetchClinics = async () => {
      try {
        const response = await fetch("http://localhost/HealthApp/api/setClinicAppointment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ clinicId: id }),
        });

        if (response.ok) {
          window.location.href = '/calendly';
        } else {
          console.error("Failed to fetch clinics:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching clinics:", error.message);
      }
    };

    fetchClinics();
  };

  return (
    <div className={styles.clinica} style={clinicAStyle}>
      <div className={styles.clinicaChild} />
      <img
        className={styles.pngtreemedicalLogoVector91}
        loading="lazy"
        alt=""
        src={pngtreemedicalLogoVector9}
      />
      <div className={styles.clinicInfoCards}>
        <div className={styles.clinica1} style={clinicA1Style}>
          {clinicA}
        </div>
        <div className={styles.joremIpsumDolor}>
          Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et velit
          interdum, ac mattis.
        </div>
        <div className={styles.clinicActions}>
          <button className={styles.clinicBooking} onClick={handleBookTextClick}>
            <div className={styles.clinicBookingChild} />
            Book
          </button>
          <div className={styles.clinicDetails}>
            <div className={styles.clinicThumbnails}>
              <img
                className={styles.thumbnailImagesIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <div className={styles.thumbnailSpacing}>
                <div className={styles.spacingElements}>5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicA;
