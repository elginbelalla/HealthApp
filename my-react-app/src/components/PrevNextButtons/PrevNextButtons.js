import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PrevNextButtons.module.css";

const PrevNextButtons = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = useCallback(async () => {
    try {
      const response = await fetch('http://example.com/saveProfileInfo.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful response (e.g., show success message, navigate to next page)
        navigate("/ProfileInfo1");
      } else {
        // Handle error response
        console.error('Failed to save profile info:', data.message);
      }
    } catch (error) {
      console.error('Failed to save profile info:', error.message);
    }
  }, [navigate, formData]);

  const onPreviousButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNextButtonContainerClick = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);


  return (
    <div className={styles.iconContainer}>
      <div className={styles.previousbuttonParent}>
        <div
          className={styles.previousbutton}
          onClick={onPreviousButtonContainerClick}
        >
          <div className={styles.label}>Previous</div>
        </div>
        <div className={styles.nextbutton} onClick={onNextButtonContainerClick}>
          <div className={styles.label1}>next</div>
        </div>
      </div>
    </div>
  );
};

export default PrevNextButtons;
