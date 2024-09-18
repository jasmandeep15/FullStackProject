import styles from "./Item.module.css";
function Item({ item, bought, handleBuyButton }) {
  console.log(bought);
  return (
    <div
      className={` ${styles.item} list-group-item  ${bought ? active : null}`}
    >
      <div className={styles.itemName}>{item}</div>
      <button
        className={`btn btn-info ${styles.button} `}
        onClick={(event) => handleBuyButton(event)}
      >
        Buy
      </button>
    </div>
  );
}
export default Item;
