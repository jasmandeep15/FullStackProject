import Container from "./components/Container";
import Heading from "./components/Heading";
import Input from "./components/Input";
import ItemContainer from "./components/ItemConstainer";
import { useState } from "react";

function App() {
  // let food = ["Banana", "Apple", "Pears", "Orange", "Kiwi"];
  // let textToShow = "Food item entered by user";
  let foodItems = useState(["Banana", "Kiwi"]);
  let food = foodItems[0];
  let setFoodItems = foodItems[1];

  let textStateArr = useState("Food item entered by user");
  let textToEdit = textStateArr[0];
  let setTextToEdit = textStateArr[1];

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodValue = event.target.value;
      let newItem = [...food, newFoodValue];

      event.target.value = "";
      setFoodItems(newItem);
      console.log(newFoodValue);
    }
    //setTextToEdit(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <>
      <Container>
        <Heading></Heading>
        <Input handleOnKeyDown={onKeyDown}></Input>

        <ItemContainer foodItems={food}></ItemContainer>
      </Container>
    </>
  );
}

export default App;
