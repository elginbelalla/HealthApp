import "./PatientForm.css";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const PatientForm = ({ onClose }) => {
  return (
    <div className="patient-form">
      <div className="close-wrapper">
        <img className="close-icon" loading="lazy" alt="" src="/close.svg" onClick={onClose}/>
      </div>
      <section className="personal-data-form">
        <div className="personalinfo2">
          <h3 className="personal-information">Personal Information</h3>
          <div className="body4">
            <div className="name-fields-parent">
              <div className="name-fields">
                <img
                  className="icon4"
                  loading="lazy"
                  alt=""
                  src="/icon1@2x.png"
                />
                <div className="name2">
                  <div className="id">
                    <div className="field-label18">ID</div>
                    <div className="name-input-fields">
                      <div className="name-values">1223432545d</div>
                      <div className="contents20">
                        <div className="line1" />
                      </div>
                    </div>
                  </div>
                  <div className="first-name">
                    <div className="field-label19">First name</div>
                    <div className="filan-parent">
                      <div className="filan">Filan</div>
                      <div className="contents21">
                        <div className="line2" />
                      </div>
                    </div>
                  </div>
                  <div className="last-name">
                    <div className="field-label20">Last name</div>
                    <div className="fisteku-parent">
                      <div className="fisteku">Fisteku</div>
                      <div className="contents22">
                        <div className="line3" />
                      </div>
                    </div>
                  </div>
                  <div className="email">
                    <div className="field-label21">Email</div>
                    <div className="fisteku-group">
                      <div className="fisteku1">ffisteku@gmail.com</div>
                      <div className="contents23">
                        <div className="line4" />
                      </div>
                    </div>
                  </div>
                  <div className="last-name1">
                    <div className="field-label22">Phone Number</div>
                    <div className="fisteku-container">
                      <div className="fisteku2">06892549834</div>
                      <div className="contents24">
                        <div className="line5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-fields-parent">
                <div className="contact-fields">
                  <div className="phone-field">
                    <div className="phone-input">
                      <div className="field-label23">Gender</div>
                      <div className="contents25">
                        <div className="line6" />
                      </div>
                    </div>
                    <div className="field-label24">Date of Birth</div>
                    <div className="contents26">
                      <div className="line7" />
                    </div>
                  </div>
                  <div className="address-fields">
                    <div className="field-label25">Age</div>
                    <div className="address-input-container">
                      <div className="contents27">
                        <div className="line8" />
                      </div>
                    </div>
                    <div className="field-label26">Height (in cm)</div>
                    <div className="contents28">
                      <div className="line9" />
                    </div>
                  </div>
                </div>
                <div className="emergency-contact">
                  <div className="field-label27">Place of Birth</div>
                  <div className="emergency-contact-input">
                    <div className="field-label28">Weight (in kg)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contents-parent">
              <div className="contents29">
                <div className="line10" />
              </div>
              <div className="contents-wrapper">
                <div className="contents30">
                  <div className="line11" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="patient-information">
        <div className="medical-data">
          <h3 className="large-title4">Personal health history</h3>
          <div className="body5">
            <div className="concerns1">
              <div className="previous-health-related-concer1">
                Previous health-related concerns
              </div>
              <input className="input" type="text" />
            </div>
            <div className="medication1">
              <div className="previous-medication1">Previous medication</div>
              <input className="input1" type="text" />
            </div>
            <div className="notes2">
              <div className="notes3">Notes</div>
              <div className="input2" />
            </div>
          </div>
        </div>
      </section>
      <section className="patient-information1">
        <div className="large-title-container">
          <h3 className="large-title5">Family’s health history</h3>
          <div className="body6">
            <div className="concerns2">
              <div className="previous-health-related-concer2">
                Previous health-related concerns
              </div>
              <div className="input3" />
            </div>
            <div className="medication2">
              <div className="previous-medication2">Previous medication</div>
              <div className="input4" />
            </div>
            <div className="notes4">
              <div className="notes5">Notes</div>
              <div className="input5" />
            </div>
          </div>
        </div>
      </section>
      <section className="form-action-buttons">
        <div className="edit-button-container">
          <div className="exam-title-panel-parent">
            <div className="exam-title-panel">
              <h3 className="large-title6">Doctor’s Notes</h3>
              <div className="editbutton">
                <div className="label8">Edit</div>
              </div>
            </div>
            <div className="large-title7">Dr Filan Fisteku</div>
          </div>
          <div className="body7">
            <div className="physical-exam">Physical Exam</div>
            <input className="input6" type="text" />
            <div className="diagnosis">Diagnosis</div>
            <div className="input7" />
            <div className="plan">Plan</div>
            <div className="input8" />
            <div className="tests1">
              <div className="subhead">
                <div className="tests2">Tests</div>
              </div>
              <div className="input9">
                <div className="file3">
                  <img className="pdf-icon3" alt="" src="/pdf1.svg" />
                  <div className="mydetpdf3">myDet.pdf</div>
                </div>
                <div className="file4">
                  <img className="pdf-icon4" alt="" src="/pdf1.svg" />
                  <div className="mydetpdf4">myDet.pdf</div>
                </div>
                <div className="file5">
                  <img className="pdf-icon5" alt="" src="/pdf1.svg" />
                  <div className="mydetpdf5">myDet.pdf</div>
                </div>
                <div className="file6">
                  <img className="pdf-icon6" alt="" src="/pdf1.svg" />
                  <div className="mydetpdf6">myDet.pdf</div>
                </div>
                <div className="file7">
                  <img className="pdf-icon7" alt="" src="/pdf1.svg" />
                  <div className="mydetpdf7">myDet.pdf</div>
                </div>
                <div className="file8">
                  <img className="pdf-icon8" alt="" src="/pdf1.svg" />
                  <div className="mydetpdf8">myDet.pdf</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="large-title8">PATIENT CHART</h1>
    </div>
  );
};

export default PatientForm;
