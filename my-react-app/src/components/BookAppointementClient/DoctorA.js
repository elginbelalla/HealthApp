import { useMemo } from "react";
import styles from "./DoctorA.module.css";

const DoctorA = ({
  d17c77810d0afc9bdb1cb7fbd,
  doctorA,
  propGap,
  propPadding,
  propWidth,
  propPadding1,
  id,
}) => {
  const doctorAStyle = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding,
    };
  }, [propGap, propPadding]);

  const doctorA1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const doctorDetailsStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);


  const handleBookTextClick = () => {
    const fetchClinics = async () => {
      try {
        const response = await fetch("http://localhost/HealthApp/api/setDoctorAppointment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ doctorId: id }),
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
    <div className={styles.doctora} style={doctorAStyle}>
      <div className={styles.doctoraChild} />
      <img
        className={styles.d17c77810d0afc9bdb1cb7fbd1aef2Icon}
        alt=""
        src={d17c77810d0afc9bdb1cb7fbd}
      />
      <div className={styles.doctorProfiles}>
        <div className={styles.doctora1} style={doctorA1Style}>
          {doctorA}
        </div>
        <div className={styles.joremIpsumDolor}>
          Jorem ipsum dolor, consectetur adipiscing elit. Nunc v libero et velit
          interdum, ac mattis.
        </div>
        <div className={styles.doctorActions}>
          <div className={styles.doctorBooking}>
            <div className={styles.doctorBookingChild} />
            <div className={styles.book} onClick={handleBookTextClick}>Book</div>
          </div>
          <div className={styles.doctorDetails} style={doctorDetailsStyle}>
            <div className={styles.doctorThumbnails}>
              <img
                className={styles.thumbnailImagesIcon}
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

export default DoctorA;
