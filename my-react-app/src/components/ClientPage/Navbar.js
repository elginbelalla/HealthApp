import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  // State to manage showing the user menu
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Function to toggle the user menu
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const onHomePageTextClick = useCallback(() => {
    navigate("/clientpage");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onBookAppointementTextClick = useCallback(() => {
    navigate("/booking-page");
  }, [navigate]);

  const onRequestTestTextClick = useCallback(() => {
    navigate("/request-test");
  }, [navigate]);

  const onMedicalHistoryTextClick = useCallback(() => {
    navigate("/medical-records");
  }, [navigate]);

  const handleSettingsClick = () => {
    navigate('/user-settings');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <header className={styles.navbar}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <nav className={styles.topBar}>
        <nav className={styles.homePageParent}>
          <div className={styles.homePage} onClick={onHomePageTextClick}>
            Home Page
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
            About Us
          </div>
          <div
            className={styles.bookAppointement}
            onClick={onBookAppointementTextClick}
          >
            Book Appointment
          </div>
          <div className={styles.requestTest} onClick={onRequestTestTextClick}>
            Request Test
          </div>
          <div
            className={styles.medicalHistory}
            onClick={onMedicalHistoryTextClick}
          >
            Medical History
          </div>
        </nav>
      </nav>
      <div className={styles.userWrapper}>
        <img
          className={styles.userIcon}
          loading="lazy"
          alt=""
          src="/user.svg"
          onClick={toggleUserMenu} // Toggle menu when user icon is clicked
        />
        {showUserMenu && (
          <div className={styles.userMenu}>
            <div className={styles.userMenuItem} onClick={handleSettingsClick} >Settings</div>
            <div className={styles.userMenuItem} onClick={handleLogoutClick} >Log out</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
