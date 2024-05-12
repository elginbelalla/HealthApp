import React, { useRef, useState, useEffect } from 'react';
import styles from "./FrameComponent.module.css";

const FrameComponent = React.forwardRef(({ setSelectedFilesCount, setSelectedFiles: setSelectedFilesParent }, ref) => {
  const [selectedFilesCount, setSelectedFilesCountLocal] = useState(0);
  const [selectedFiles, setSelectedFilesLocal] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    clearSelectedFiles() {
      setSelectedFilesCount(0);
      setSelectedFilesCountLocal(0);
      setSelectedFilesLocal([]);
      fileInputRef.current.value = '';
    }
  }));

  useEffect(() => {
    console.log("in frame", selectedFilesCount);
  }, [selectedFilesCount]); // This effect runs when selectedFilesCount changes

  const handleFileChange = async (e) => {
    const files = e.target.files;
    let validFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isValidExtension = checkFileExtension(file.name);
      if (isValidExtension) {
        validFiles.push(file);
      } else {
        // Notify the user if an invalid file is selected
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 10000);
      }
    }

    // Update selected files count and display only for valid files
    const newSelectedFiles = [...selectedFiles, ...validFiles];
    setSelectedFilesLocal(newSelectedFiles); 
    setSelectedFilesCountLocal(newSelectedFiles.length);
    setSelectedFilesCount(newSelectedFiles.length);
    setSelectedFilesParent(newSelectedFiles);
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
          accept=".jpg, .jpeg, .png, .pdf" 
          multiple
        />
        {selectedFilesCount > 0 && (
          <div className={styles.selectedFilesCount}>
            <p>{`${selectedFilesCount} file(s) selected`}</p>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
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
