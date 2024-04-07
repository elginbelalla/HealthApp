import styles from "./Yourownreview.module.css";

const Yourownreview = () => {
  return (
    <section className={styles.yourownreview}>
      <div className={styles.yourOwnReviewFeelFreeToLParent}>
        <div className={styles.yourOwnReviewContainer}>
          <span>
            <p className={styles.yourOwnReview}>Your own review</p>
            <p className={styles.feelFreeTo}>
              Feel free to leave a review for our doctors!
            </p>
          </span>
        </div>
        <div className={styles.selectaclinic}>
          <form className={styles.form}>
            <div className={styles.leaveareview}>
              <div className={styles.leaveAReviewParent}>
                <div className={styles.leaveAReview}>Leave a review</div>
                <div className={styles.pleaseLeaveYour}>
                  Please leave your review here.
                </div>
              </div>
              <div className={styles.input}>
                <textarea className={styles.inputChild} rows={6} cols={20} />
              </div>
            </div>
            <div className={styles.leaveareview1}>
              <div className={styles.leaveARating}>Leave a rating</div>
              <div className={styles.pleaseLeaveYour1}>
                Please leave your rating here.
              </div>
            </div>
            <div className={styles.dropdownbox}>
              <img
                className={styles.starPurple500Icon}
                loading="lazy"
                alt=""
                src="/img/star-purple500.svg"
              />
              <img
                className={styles.starPurple500Icon1}
                loading="lazy"
                alt=""
                src="/img/star-purple500-1.svg"
              />
              <img
                className={styles.starPurple500Icon2}
                loading="lazy"
                alt=""
                src="/img/star-purple500-2.svg"
              />
              <img
                className={styles.starHalfIcon}
                loading="lazy"
                alt=""
                src="/img/star-half.svg"
              />
              <img
                className={styles.starOutlineIcon}
                loading="lazy"
                alt=""
                src="/img/star-outline.svg"
              />
            </div>
            <div className={styles.selectADoctorParent}>
              <div className={styles.selectADoctor}>Select a doctor</div>
              <div className={styles.chooseTheDoctor}>
                Choose the doctor this review is for.
              </div>
            </div>
            <div className={styles.dropDownBox}>
              <select className={styles.defaultSelection} />
              <div className={styles.selectionList}>
                <div className={styles.searchListFieldWrapper}>
                  <div className={styles.searchListField}>
                    <div className={styles.inputBlinker} />
                    <div className={styles.bottomBar}>
                      <div className={styles.findAnItem}>Find a doctor</div>
                    </div>
                  </div>
                </div>
                <div className={styles.lists}>
                  <div className={styles.selectionItem}>
                    <div className={styles.firstSelection}>First doctor</div>
                  </div>
                  <div className={styles.selectionItem1}>
                    <div className={styles.firstSelection1}>Second doctor</div>
                  </div>
                  <div className={styles.selectionItem2}>
                    <div className={styles.firstSelection2}>Third doctor</div>
                  </div>
                  <div className={styles.selectionItem3}>
                    <div className={styles.firstSelection3}>Fourth doctor</div>
                  </div>
                  <div className={styles.selectionItem4}>
                    <div className={styles.firstSelection4}>Fifth doctor</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.submit}>
              <div className={styles.submit1}>Submit</div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Yourownreview;
