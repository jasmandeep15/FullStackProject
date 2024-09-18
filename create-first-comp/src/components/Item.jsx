import IndividualItem from "./IndividualItem";

function Item({ food }) {
  return (
    <ul className="list-group">
      {food.map((item, key) => (
        <IndividualItem key={key} item={item}></IndividualItem>
      ))}
    </ul>
  );
}

export default Item;
