import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./UserReviewFormContainer.module.css";

const UserReviewFormContainer = () => {
  const [selectedClinic, setSelectedClinic] = useState(""); 
  const [rating, setRating] = useState(0); 

  const handleClinicChange = (event) => {
    setSelectedClinic(event.target.value);
  };

  const handleStarClick = (starIndex) => {

    setRating(starIndex);
  };

  return (
    <div className={styles.userReviewFormContainer}>
      <div className={styles.userReviewForm}>
        <div className={styles.yourOwnReviewContainer}>
          <span>
            <p className={styles.yourOwnReview}>Your own review</p>
            <p className={styles.feelFreeTo}>
              Feel free to leave a review for our clinics!
            </p>
          </span>
        </div>
        <div className={styles.formContent}>
          <form className={styles.form}>
            <div className={styles.reviewInputContainer}>
              <div className={styles.reviewInputLabel}>
                <div className={styles.leaveAReview}>Leave a review</div>
                <div className={styles.pleaseLeaveYour}>
                  Please leave your review here.
                </div>
              </div>
              <div className={styles.input}>
                <textarea
                  className={styles.searchBar}
                  rows={6}
                  cols={20}
                  placeholder="Enter your review..."
                />
              </div>
            </div>
            <div className={styles.inputLabelContainer}>
              <div className={styles.leaveARating}>Leave a rating</div>
              <div className={styles.pleaseLeaveYour1}>
                Please leave your rating here.
              </div>
            </div>
            <div className={styles.ratingStars}>
              {[1, 2, 3, 4, 5].map((index) => (
                <span
                  key={index}
                  className={
                    index <= rating
                      ? styles.starFilled
                      : styles.starOutline
                  }
                  onClick={() => handleStarClick(index)}
                >
                  ★
                </span>
              ))}
            </div>
            <div className={styles.inputLabelContainer1}>
              <div className={styles.selectAClinic}>Select a clinic</div>
              <div className={styles.chooseTheClinic}>
                Choose the clinic this review is for.
              </div>
            </div>
            <div className={styles.dropDownBox}>
              <Form.Select
                className={styles.defaultSelectionFormselect}
                value={selectedClinic}
                onChange={handleClinicChange}
              >
                <option value="">Select a clinic</option>
                <option value="First clinic">First clinic</option>
                <option value="Second clinic">Second clinic</option>
                <option value="Third clinic">Third clinic</option>
                <option value="Fourth clinic">Fourth clinic</option>
                <option value="Fifth clinic">Fifth clinic</option>
              </Form.Select>
            </div>
            <button className={styles.submit}>
              <div className={styles.submit1}>Submit</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserReviewFormContainer;
