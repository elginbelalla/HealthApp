import React, { useRef, useState } from "react";
import FrameComponent from "../../components/UploadDoc/FrameComponent";
import Footer from "../../components/UploadDoc/Footer";
import styles from "./UploadDoc.module.css";
import { Link, useLocation } from "react-router-dom";

const UploadDoc = () => {
  const frameComponentRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFilesCount, setSelectedFilesCount] = useState(0);

  const location = useLocation();

  const doctorId = location.state ? location.state.doctorId : null;;
  const userType = location.state ? location.state.role : null;;

  const handleCancelClick = () => {
    console.log('upl',selectedFilesCount);

    selectedFiles.forEach(file => {
      console.log(file.name);

    });    
    
    if (frameComponentRef.current) {
      frameComponentRef.current.clearSelectedFiles();
      setSelectedFiles([]);
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
            setSelectedFiles={setSelectedFiles}
          />
          <Footer
            onCancelClick={handleCancelClick}
            selectedFiles={selectedFiles}
            selectedFilesCount={selectedFilesCount}
            id={doctorId}
            userRole={userType}
          />
        </div>
      </section>
    </div>
  );
};

export default UploadDoc;
