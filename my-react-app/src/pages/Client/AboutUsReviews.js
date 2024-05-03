import Navbar from "../../components/ClientPage/Navbar";
import Content from "../../components/AboutUsClient/Content";
import DoctorTestimonials from "../../components/AboutUsClient/DoctorTestimonials";
import styles from "./AboutUsReviews.module.css";

const AboutUsReviews = () => {
  return (
    <div className={styles.aboutusreviews}>
      <Navbar />
      <div className={styles.teamreviews} />
      <Content />
      <section className={styles.doctorsListParent}>
        <div className={styles.doctorTestimonialsWrapper}>
          <DoctorTestimonials />
        </div>
      </section>
    </div>
  );
};

export default AboutUsReviews;
