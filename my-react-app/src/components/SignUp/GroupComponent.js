import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './GroupComponent.module.css';

const GroupComponent = ({ formData, onFormChange, updateRole }) => {
  const { name, email, phoneNumber, password, role, specialization } = formData;

  const handleInputChange = (field, value) => {
    onFormChange(field, value);
  };

  const handleRoleChange = (value) => {
    updateRole(value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        {/* Name input */}
        <div className={styles.nameInputContainerParent}>
          <div className={styles.name}>Name</div>
          <div className={styles.labelEmail}>
            <div className={styles.inputxhbazegmailcom}>
              <input
                type="text"
                value={name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={styles.xhesiBaze}
              />
            </div>
            <div className={styles.passwordInputContainer}></div>
          </div>
        </div>
        {/* Email input */}
        <div className={styles.frameContainer}>
          <div className={styles.emailWrapper}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.xhbazegmailcomWrapper}>
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={styles.xhbazegmailcom}
              />
            </div>
            <div className={styles.frameChild} />
          </div>
        </div>
        {/* Password input */}
        <div className={styles.inputpasswordParent}>
          <div className={styles.inputpassword}>
            <div className={styles.password}>Password</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={styles.passwordInput}
                />
              </div>
            </div>
          </div>
          <div className={styles.frameItem} />
        </div>
      </div>
      {/* Phone Number input */}
      <div className={styles.frameParent2}>
        <div className={styles.phoneNumberWrapper}>
          <div className={styles.phoneNumber}>Phone Number</div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameInner} />
          <input
            type="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className={styles.div}
          />
        </div>
      </div>
      {/* Role dropdown */}
      <div className={styles.caretupInstanceParent}>
        <div className={styles.caretupInstance} onClick={() => toggleDropDown()}>
          <div className={styles.choseYourRole}>Choose your Role</div>
        </div>
        <div className={styles.dropDownBox}>
          <Form.Select
            className={styles.defaultSelectionFormselect}
            name="dropdown"
            id="dropdown"
            value={formData.role}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => handleRoleChange(e.target.value)}
          >
            <option>Select a role</option>
            <option value="User">User</option>
            <option value="Clinic">Clinic</option>
            <option value="Doctor">Doctor</option>
          </Form.Select>

          {/* Specialization input for Doctor */}
          {role === "Doctor" && (
            <div className={styles.specializationInput}>
              <input
                type="text"
                value={specialization}
                onChange={(e) => handleInputChange('specialization', e.target.value)}
                placeholder="Enter your specialization"
              />
            </div>
          )}

          {/* List of roles */}
          {isOpen && (
            <div className={styles.selectionList}>
              <div className={styles.lists}>
                <div className={styles.selectionItem}>
                  <div className={styles.firstSelection} onClick={() => handleRoleChange("User")}>User</div>
                </div>
                <div className={styles.selectionItem1}>
                  <div className={styles.firstSelection1} onClick={() => handleRoleChange("Clinic")}>Clinic</div>
                </div>
                <div className={styles.selectionItem2}>
                  <div className={styles.firstSelection2} onClick={() => handleRoleChange("Doctor")}>Doctor</div>
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
