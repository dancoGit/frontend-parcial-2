import styles from "./ButtonSubmitComponent.module.css"

const ButtonSubmitComponent = ({label}) => {
  return (
    <div>
      <button
       className={styles.button}
       >
        {label}
      </button>
    </div>
  )
}
export default ButtonSubmitComponent