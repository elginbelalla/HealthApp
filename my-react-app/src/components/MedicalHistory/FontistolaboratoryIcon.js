import styles from "./Result1.module.css";

const FontistolaboratoryIcon = ({ fontistolaboratory }) => {
  return (
    <img
      className={styles.fontistolaboratoryIcon}
      alt=""
      src={fontistolaboratory}
    />
  );
};

export default FontistolaboratoryIcon;
