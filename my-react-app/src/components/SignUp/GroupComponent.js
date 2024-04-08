import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './GroupComponent.module.css';

const GroupComponent = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.nameInputContainerParent}>
          <div className={styles.nameInputContainer}>
            <div className={styles.name}>Name</div>
          </div>
          <div className={styles.labelEmail}>
            <div className={styles.inputxhbazegmailcom}>
              <div className={styles.xhesiBaze}>Xhesi Baze</div>
            </div>
            <div className={styles.passwordInputContainer} />
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.xhbazegmailcomWrapper}>
              <div className={styles.xhbazegmailcom}>xhbaze@gmail.com</div>
            </div>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.inputpasswordParent}>
          <div className={styles.inputpassword}>
            <div className={styles.password}>Password</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
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
            </div>
          </div>
          <div className={styles.frameItem} />
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.phoneNumberWrapper}>
          <div className={styles.phoneNumber}>Phone Number</div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameInner} />
          <div className={styles.div}>+355685159749</div>
        </div>
      </div>
      <div className={styles.caretupInstanceParent}>
        <div className={styles.caretupInstance} onClick={toggleDropDown}>
          <div className={styles.choseYourRole}>Chose your Role</div>
        </div>
        <div className={styles.dropDownBox}>
          <Form.Select
            className={styles.defaultSelectionFormselect}
            name="dropdown"
            id="dropdown"
            onClick={(e) => e.stopPropagation()} 
          >
            <option>Select a role</option>
            <option value="User">User</option>
            <option value="Clinic">Clinic</option>
            <option value="Doctor">Doctor</option>
          </Form.Select>
        
          {isOpen && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
