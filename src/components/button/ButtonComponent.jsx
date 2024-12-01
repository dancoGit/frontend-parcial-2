import styles from "./ButtonSubmitComponent.module.css"

const ButtonSubmitComponent = ({label, onClick}) => {
  return (
    <div>
      <button
       className={styles.button}
       onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}
export default ButtonSubmitComponent