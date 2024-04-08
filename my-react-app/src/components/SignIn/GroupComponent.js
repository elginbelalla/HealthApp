import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.nameParent}>
        <div className={styles.name}>Name</div>
        <div className={styles.xhesiBaze}>Xhesi Baze</div>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.xhbazegmailcomWrapper}>
              <div className={styles.xhbazegmailcom}>xhbaze@gmail.com</div>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.signUpButton}>
          <div className={styles.passwordWrapper}>
            <div className={styles.password}>Password</div>
          </div>
          <div className={styles.signUpButtonInner}>
            <div className={styles.parentContainerParent}>
              <div className={styles.parentContainer}>
                <div className={styles.newMoonParent}>
                  <img
                    className={styles.newMoonIcon}
                    loading="lazy"
                    alt=""
                    src="/new-moon@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon1}
                    loading="lazy"
                    alt=""
                    src="/new-moon-1@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon2}
                    loading="lazy"
                    alt=""
                    src="/new-moon-2@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon3}
                    loading="lazy"
                    alt=""
                    src="/new-moon-3@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon4}
                    loading="lazy"
                    alt=""
                    src="/new-moon-4@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon5}
                    loading="lazy"
                    alt=""
                    src="/new-moon-5@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon6}
                    loading="lazy"
                    alt=""
                    src="/new-moon-6@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon7}
                    loading="lazy"
                    alt=""
                    src="/new-moon-7@2x.png"
                  />
                  <img
                    className={styles.newMoonIcon8}
                    loading="lazy"
                    alt=""
                    src="/new-moon-8@2x.png"
                  />
                </div>
              </div>
              <img
                className={styles.eyeIcon}
                loading="lazy"
                alt=""
                src="/eye@2x.png"
              />
            </div>
          </div>
          <div className={styles.button} />
        </div>
      </div>
      <div className={styles.choseYourRole}>Chose your Role</div>
      <div className={styles.instanceChild} />
      <div className={styles.div}>+355685159749</div>
      <div className={styles.phoneNumber}>Phone Number</div>
      <div className={styles.dropDownBox}>
        <div className={styles.defaultSelection}>
          <div className={styles.searchItem}>
            <div className={styles.selectARole}>Select a role</div>
          </div>
          <img className={styles.caretUpIcon} alt="" src="/caret-up@2x.png" />
        </div>
        <div className={styles.selectionList}>
          <div className={styles.lists}>
            <div className={styles.selectionItem}>
              <div className={styles.firstSelection}>User</div>
            </div>
            <div className={styles.selectionItem1}>
              <div className={styles.firstSelection1}>Clinic</div>
            </div>
            <div className={styles.selectionItem2}>
              <div className={styles.firstSelection2}>Doctor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
