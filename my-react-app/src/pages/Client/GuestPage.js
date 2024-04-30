import React, { useEffect } from 'react'; // Import React and useEffect
import styles from "./GuestPage.module.css";
import { useNavigate } from 'react-router-dom';

const GuestPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  useEffect(() => { 
    const script = document.createElement('script');
    script.text = `
      window.embeddedChatbotConfig = {
        chatbotId: "Mt-z-Z792VxDhNQbt46x8",
        domain: "www.chatbase.co"
      };
    `;
    document.head.appendChild(script);

    const chatbotScript = document.createElement('script');
    chatbotScript.src = 'https://www.chatbase.co/embed.min.js';
    chatbotScript.chatbotId = 'Mt-z-Z792VxDhNQbt46x8';
    chatbotScript.domain = 'www.chatbase.co';
    chatbotScript.defer = true;
    document.head.appendChild(chatbotScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(chatbotScript);
    };
  }, []);

  return (
    <div className={styles.guestpage}>
      <section className={styles.guestpageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <header className={styles.welcomeWrapper}>
              <h1 className={styles.welcome}>WELCOME!</h1>
            </header>
            <div className={styles.sidePanel}>
              <div className={styles.sidePanelChild} />
              <div className={styles.thisIsYour}>
                This is your personal tool for quick access to healthcare advice
                and support. Engage with our intuitive chatbot tailored to your
                needs. Experience the convenience of getting personalized
                assistance and guidance instantly.
              </div>
            </div>
          </div>
          <div className={styles.utilityPanel}>
            <div className={styles.chatPanel}>
              <div className={styles.utilityPanel}>
                <div className={styles.component1}>
                  <button className={styles.buttonShape} onClick={handleGoBack} />
                  <div className={styles.goBack} onClick={handleGoBack}>Go back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        className={styles.doctor11Icon}
        loading="lazy"
        alt=""
        src="/doctor1-1@2x.png"
      />
    </div>
  );
};

export default GuestPage;
