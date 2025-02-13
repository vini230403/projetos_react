import styles from "./ItemList.module.css"


const ItemList = ({title, description}) => {
  return (
    <div className={styles.item_list}>
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  )
}

export default ItemList