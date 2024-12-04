import styles from "./LabelComponent.module.css";

const LabelComponent = ({ label, fontSize = "21px", htmlFor, onClick , color = "#06B0C6", cursor = "default"}) => {
  return (
    <>
      <label
        className={styles.label}
        style={{ fontSize: fontSize, color: color, cursor: cursor }}
        htmlFor={htmlFor}
        onClick={onClick}
      >
        {label}
      </label>
    </>
  );
};
export default LabelComponent;
