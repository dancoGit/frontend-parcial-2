import styles from "./InputComponent.module.css";

const InputComponent = ({ type, id, name, value, placeholder, onChange }) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </>
  );
};
export default InputComponent;
