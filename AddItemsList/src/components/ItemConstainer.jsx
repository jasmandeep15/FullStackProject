import Item from "./Item";
import styles from "./ItemContainer.module.css";
import { useState } from "react";

function ItemContainer({ foodItems }) {
  const handleBuyButton = (event, item) => {
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
    console.log("Clicked");
  };
  let ar = useState([]);
  let activeItems = ar[0];
  let SetActiveItems = ar[1];

  return (
    <div className={styles.itemContainer}>
      {foodItems.map((item, index) => {
        return (
          <Item
            key={index}
            item={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => handleBuyButton(item, event)}
          ></Item>
        );
      })}
    </div>
  );
}
export default ItemContainer;
