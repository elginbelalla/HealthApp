import React, { useState, useEffect } from "react";
import DoctorA from "./DoctorA";
import styles from "./ClinicListing.module.css";

const DoctorListing = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost/HealthApp/api/getDoctors", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setDoctors(responseData.data);
          console.log(responseData.data);
        } else {
          console.log("Failed to fetch clinics:", await response.text())
        }
      } catch (error) {
        console.error("Error fetching clinics:", error.message);
      }
    };

    // Call fetchDoctors function when the component mounts
    fetchDoctors();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <section className={styles.clinicListing}>
      <div className={styles.clinicOptions}>
        {doctors.map((doctor) => (
          <DoctorA
            d17c77810d0afc9bdb1cb7fbd={"/3d17c77810d0afc9bdb1cb7fbd1aef2d-1@2x.png"}
            doctorA={`${doctor.name} ${doctor.lastName}`}
            id={doctor.doctorId}
          />
        ))}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
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
      </footer>
    </section>
  );
};

export default DoctorListing;
