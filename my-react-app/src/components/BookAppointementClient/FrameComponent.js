import styles from "./FrameComponent.module.css";
import Navbar from "../../components/ClientPage/Navbar";

const FrameComponent = () => {
  
  return (
    <section className={styles.navbarParent}>
      <header className={styles.navbar}>
      <Navbar />
      </header>
        <div className={styles.bookAnAppointmentContainer}>
            <p className={styles.bookAnAppointment}>Book An Appointment</p>
            <p className={styles.pickTheClinic}>
              Pick the clinic which you think fits your needs best
            </p>
        </div>
    </section>
  );
};

export default FrameComponent;
