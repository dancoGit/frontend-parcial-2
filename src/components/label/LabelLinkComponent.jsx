import styles from "./LabelLinkComponent.module.css";

const LabelLinkComponent = ({ label, fontSize = "20px", htmlFor, onClick }) => {
  return (
    <>
      <label
        className={styles.labelLink}
        style={{ fontSize: fontSize }}
        htmlFor={htmlFor}
        onClick={onClick}
      >
        {label}
      </label>
    </>
  );
};
export default LabelLinkComponent;
