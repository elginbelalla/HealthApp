import React, { useState, useEffect, useCallback } from "react";
import ClinicA from "./ClinicA";
import styles from "./ClinicListing.module.css";

const ClinicListing = () => {

  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await fetch("http://localhost/HealthApp/api/getClinics", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setClinics(responseData.data);
          console.log(responseData.data)
        } else {
          console.error("Failed to fetch clinics:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching clinics:", error.message);
      }
    };

    fetchClinics();
  }, []);


  const onBookTextClick = useCallback(() => {
    // Please sync "SelectDateAndTime" to the project
  }, []);

  return (
    <section className={styles.clinicListing}>
      <div className={styles.clinicOptions}>
        {clinics.map((clinic) => (
          <ClinicA
            id={clinic.clinicId}
            pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1@2x.png"
            clinicA={clinic.clinicName}
            onBookTextClick={onBookTextClick}
            propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-2) var(--padding-17xl)"
            propMinWidth="3.813rem"
          />
        ))}
      </div>
    </section>
  );
};

export default ClinicListing;
