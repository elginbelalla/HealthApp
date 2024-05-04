import React, { useRef, useState } from 'react';
import styles from "./FrameComponent.module.css";

const FrameComponent = React.forwardRef(({ setSelectedFilesCount }, ref) => {
  const [selectedFilesCount, setSelectedFilesCountLocal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    clearSelectedFiles() {
      setSelectedFilesCountLocal(0);
      fileInputRef.current.value = ''; 
      fileInputRef.current.removeAttribute('disabled'); 
    }
  }));

  const handleFileChange = async (e) => {
    const files = e.target.files;
    let validFiles = [];
    let invalidFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isValidExtension = checkFileExtension(file.name);
      if (isValidExtension) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file);
      }
    }

    if (invalidFiles.length > 0) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 10000); 
    }

    setSelectedFilesCountLocal(validFiles.length);
    setSelectedFilesCount(validFiles.length); 

    console.log('Selected files:', validFiles);
  };

  const handleFileSelect = () => {
    fileInputRef.current.click(); 
  };

  const checkFileExtension = (fileName) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf'];
    const fileExtension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
    return allowedExtensions.includes(fileExtension);
  };

  return (
    <div className={styles.unsplashdmsdujjlgInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.pleaseVerifyYourIdentityWrapper}>
              <h1 className={styles.pleaseVerifyYour}>
                Please verify your identity
              </h1>
            </div>
            <h2 className={styles.selectRelevantDocuments}>
              Select relevant documents to complete your account
            </h2>
          </div>
        </div>
        <div className={styles.uploadField} onClick={handleFileSelect}>
          <img
            className={styles.featheruploadCloudIcon}
            loading="lazy"
            alt=""
            src="/featheruploadcloud.svg"
          />
          <div className={styles.bottomContent}>
            <div className={styles.description}>
              <h2 className={styles.selectAFile}>
                Select a file or drag and drop here
              </h2>
              <div className={styles.jpgPngOr}>
                JPG, PNG or PDF, file size no more than 10MB
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.selectFile}>Select file</div>
            </div>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          multiple // Allow multiple file selection
        />
        <div className={styles.selectedFilesCount}>
          {selectedFilesCount > 0 && (
            <p>{`${selectedFilesCount} file(s) selected`}</p>
          )}
        </div>
        {showPopup && (
          <div className={styles.popup}>
            <p>File cannot be selected. Please make sure it is in the correct format.</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default FrameComponent;
