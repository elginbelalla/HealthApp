import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './GroupComponent.module.css';

const GroupComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.nameInputContainerParent}>
          <div className={styles.name}>Name</div>
          <div className={styles.labelEmail}>
            <div className={styles.inputxhbazegmailcom}>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className={styles.xhesiBaze}
              />
            </div>
            <div className={styles.passwordInputContainer}>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.xhbazegmailcomWrapper}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={styles.xhbazegmailcom}
              />
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
                {/* Password input */}
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={styles.passwordInput}
                />
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
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={styles.div}
          />
        </div>
      </div>
      <div className={styles.caretupInstanceParent}>
        <div className={styles.caretupInstance} onClick={toggleDropDown}>
          <div className={styles.choseYourRole}>Choose your Role</div>
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
