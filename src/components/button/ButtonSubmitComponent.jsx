import styles from "./ButtonSubmitComponent.module.css";

const ButtonSubmitComponent = ({ id, name, label }) => {
  return (
    <div>
      <button id={id} name={name} className={styles.button}>
        {label}
      </button>
    </div>
  );
};
export default ButtonSubmitComponent;
