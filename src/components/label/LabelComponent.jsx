import styles from "./LabelComponent.module.css";

const LabelComponent = ({ label, fontSize = "20px", htmlFor, onClick }) => {
  return (
    <>
      <label
        className={styles.label}
        style={{ fontSize: fontSize }}
        htmlFor={htmlFor}
        onClick={onClick}
      >
        {label}
      </label>
    </>
  );
};
export default LabelComponent;
