import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.getincontactParent}>
      <div className={styles.getincontact}>
        <h1 className={styles.getInTouch}> Get In Touch With Us!</h1>
        <div className={styles.firstname}>
          <div className={styles.firstName}>First Name</div>
          <textarea className={styles.firstnameChild} rows={5} cols={18} />
        </div>
        <div className={styles.lastname}>
          <div className={styles.lastName}>Last Name</div>
          <textarea className={styles.lastnameChild} rows={5} cols={18} />
        </div>
        <div className={styles.email}>
          <div className={styles.email1}>Email</div>
          <div className={styles.emailInner}>
            <textarea className={styles.frameChild} rows={5} cols={18} />
          </div>
        </div>
        <div className={styles.phonenumber}>
          <div className={styles.phoneNumberWrapper}>
            <div className={styles.phoneNumber}>Phone Number</div>
          </div>
          <textarea className={styles.phonenumberChild} rows={5} cols={18} />
        </div>
        <div className={styles.message}>
          <div className={styles.message1}>Message</div>
          <div className={styles.messageInner}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-4187.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.instanceParent}>
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/frame-6@2x.png"
          />
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame-3@2x.png"
          />
          <img
            className={styles.frameChild1}
            loading="lazy"
            alt=""
            src="/frame-5@2x.png"
          />
          <img
            className={styles.frameChild2}
            loading="lazy"
            alt=""
            src="/frame-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
