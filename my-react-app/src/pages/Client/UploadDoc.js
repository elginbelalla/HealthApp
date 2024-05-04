import React, { useRef, useState } from "react";
import FrameComponent from "../../components/UploadDoc/FrameComponent";
import Footer from "../../components/UploadDoc/Footer";
import styles from "./UploadDoc.module.css";
import { Link } from "react-router-dom";

const UploadDoc = () => {
  const frameComponentRef = useRef(null);
  const [selectedFilesCount, setSelectedFilesCount] = useState(0);

  const handleCancelClick = () => {
    if (frameComponentRef.current) {
      frameComponentRef.current.clearSelectedFiles();
      setSelectedFilesCount(0); 
    }
  };

  return (
    <div className={styles.uploadDoc}>
      <section className={styles.logoParent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />

        <div className={styles.iconWrapper}>
          <Link to="/sign-up">
            {" "}
            {/* Use Link instead of a regular <a> tag */}
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </Link>
        </div>
      </section>
      <section className={styles.unsplashdmsdujjlgWrapper}>
        <div className={styles.unsplashdmsdujjlg}>
          <FrameComponent
            ref={frameComponentRef}
            setSelectedFilesCount={setSelectedFilesCount}
          />
          <Footer
            onCancelClick={handleCancelClick}
            selectedFilesCount={selectedFilesCount}
          />
        </div>
      </section>
    </div>
  );
};

export default UploadDoc;
