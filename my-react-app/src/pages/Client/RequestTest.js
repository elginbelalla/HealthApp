import { useState } from "react";
import Navbar from "../../components/ClientPage/Navbar";
import FrameComponent from "../../components/RequestTest/FrameComponent1";
import styles from "./RequestTest.module.css";

const RequestTest = () => {
  const [selectedTest, setSelectedTest] = useState("Select a test");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleTestSelect = (test) => {
    setSelectedTest(test);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.requesttest}>
      <main className={styles.mainInterface}>
        <Navbar />
        <section className={styles.contentArea}>
        <p className={styles.pickTheExamination}>
                  Pick the examination you would like to do
                </p>
          <div className={styles.requestTestPickTheExaminatParent}>
              <span>
                <p className={styles.requestTest}>Request Test</p>
              </span>
            <div className={styles.testRequestContent}>
              <form className={styles.body}>
                <div className={styles.previousTestsInfoParent}>
                  <div className={styles.previousTestsInfo}>
                    <div className={styles.previousTestsDone}>
                      Previous tests done
                    </div>
                    <div className={styles.listAllYour}>
                      List all your previous examinations.
                    </div>
                  </div>
                  <textarea className={styles.input} rows={4} cols={20} />
                </div>
                <div className={styles.selectATestParent}>
                  <div
                    className={styles.selectATest}
                    onClick={toggleDropdown}
                  >
                    {selectedTest}
  
                  </div>
                  <div className={styles.chooseTheTest}>
                    Choose the test you will be taking.
                  </div>
                  {dropdownOpen && (
                    <div className={styles.dropDownBox}>
                      <div className={styles.selectionList}>
                        <div className={styles.lists}>
                          <div className={styles.dropdown}>
                            <div className={styles.selectOptions}>
                              <div
                                className={styles.selectOption}
                                onClick={() => handleTestSelect("First test")}
                              >
                                First test
                              </div>
                              <div
                                className={styles.selectOption}
                                onClick={() => handleTestSelect("Second test")}
                              >
                                Second test
                              </div>
                              <div
                                className={styles.selectOption}
                                onClick={() => handleTestSelect("Third test")}
                              >
                                Third test
                              </div>
                              <div
                                className={styles.selectOption}
                                onClick={() => handleTestSelect("Fourth test")}
                              >
                                Fourth test
                              </div>
                              <div
                                className={styles.selectOption}
                                onClick={() => handleTestSelect("Fifth test")}
                              >
                                Fifth test
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button className={styles.approve}>
                  <div className={styles.submit}>Submit</div>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default RequestTest;
