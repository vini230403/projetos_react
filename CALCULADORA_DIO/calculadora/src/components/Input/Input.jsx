import styles from "./stylesInput.module.css"


const Input = ({value}) => {
  return (
    <div className={styles.inputContainer}>
      <input value={value} className={styles.input} disabled/>
    </div>
  )
}

export default Input