import FrameComponent from "../../components/BookAppointementClient/FrameComponent";
import ClinicListing from "../../components/BookAppointementClient/ClinicListing";
import DoctorListing from "../../components/BookAppointementClient/DoctorListing";
import styles from "./BookingPage.module.css";

const BookingPage = () => {
  return (
    <div className={styles.bookingpage}>
      <FrameComponent />
      <ClinicListing />
      <section className={styles.doctorBanner}>
        <div className={styles.alreadyGotAContainer}>
            <p className={styles.alreadyGotA}>Already got a doctor in mind?</p>
            <p className={styles.chooseTheDoctor}>
              Choose the doctor you’d like to consult with
            </p>
        </div>
      </section>
      <DoctorListing />
    </div>
  );
};

export default BookingPage;
