import styles from "./stylesButton.module.css"


const Button = ({label, onClick}) => {
  return (
    <div>
      <button className={styles.buttonContainer} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button