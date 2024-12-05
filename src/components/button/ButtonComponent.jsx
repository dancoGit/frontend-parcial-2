import styles from "./ButtonSubmitComponent.module.css"

const ButtonSubmitComponent = ({label, onClick, role = ""}) => {
  return (
    <div>
      <button
        type="submit"
       className={styles.button}
       onClick={onClick}
       role={role}
      >
        {label}
      </button>
    </div>
  )
}
export default ButtonSubmitComponent