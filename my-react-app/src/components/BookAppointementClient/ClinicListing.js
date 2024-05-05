import { useCallback } from "react";
import ClinicA from "./ClinicA";
import styles from "./ClinicListing.module.css";

const ClinicListing = () => {
  const onBookTextClick = useCallback(() => {
    // Please sync "SelectDateAndTime" to the project
  }, []);

  return (
    <section className={styles.clinicListing}>
      <div className={styles.clinicOptions}>
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1@2x.png"
          clinicA="ClinicA"
          onBookTextClick={onBookTextClick}
        />
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1-1@2x.png"
          clinicA="ClinicB"
          propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-1) var(--padding-17xl)"
          propMinWidth="3.688rem"
        />
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1-2@2x.png"
          clinicA="ClinicC"
          propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-1) var(--padding-17xl)"
          propMinWidth="3.688rem"
        />
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1-3@2x.png"
          clinicA="ClinicD"
          propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-1) var(--padding-17xl)"
          propMinWidth="3.813rem"
        />
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1-4@2x.png"
          clinicA="ClinicE"
          propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-2) var(--padding-17xl)"
          propMinWidth="3.563rem"
        />
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1-5@2x.png"
          clinicA="ClinicF"
          propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-2) var(--padding-17xl)"
          propMinWidth="3.563rem"
        />
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1-6@2x.png"
          clinicA="ClinicG"
          propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-2) var(--padding-17xl)"
          propMinWidth="3.75rem"
        />
        <ClinicA
          pngtreemedicalLogoVector9="/pngtreemedical-logo-vector-9116167-1-7@2x.png"
          clinicA="ClinicH"
          propPadding="var(--padding-7xl-7) var(--padding-mini) var(--padding-base-2) var(--padding-17xl)"
          propMinWidth="3.813rem"
        />
      </div>
    </section>
  );
};

export default ClinicListing;
