import styles from "./LabelLinkComponent.module.css";

const LabelLinkComponent = ({
  id,
  name,
  label,
  fontSize = "20px",
  htmlFor,
  onClick,
  role = "",
}) => {
  return (
    <>
      <label
        id={id}
        name={name}
        className={styles.labelLink}
        style={{ fontSize: fontSize }}
        htmlFor={htmlFor}
        onClick={onClick}
        role={role}
      >
        {label}
      </label>
    </>
  );
};
export default LabelLinkComponent;
