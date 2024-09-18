import styles from "./Input.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { useState, useRef, useContext } from "react";
import { TodoItemsContext } from "../store/TodoItems-store";
function Input() {
  //   const [nameInput, setNameInput] = useState("");
  //   const [dateInput, setDateInput] = useState("");

  // const handleNameChange = (event) => {
  //   setNameInput(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDateInput(event.target.value);
  // };
  const nameInputElement = useRef();
  const dateInputElement = useRef();

  const TodoitemsObj = useContext(TodoItemsContext);
  const setVal = TodoitemsObj.setVal;

  const handleOnButtonClick = () => {
    const nameInput = nameInputElement.current.value;
    const dateInput = dateInputElement.current.value;
    setVal(nameInput, dateInput);
    nameInputElement.current.value = "";
    dateInputElement.current.value = "";
  };
  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.taskInput}
        ref={nameInputElement}
        // onChange={handleNameChange}
        // value={nameInput}
      />
      <input
        type="date"
        className={styles.taskInput}
        ref={dateInputElement}
        // onChange={handleDateChange}
        // value={dateInput}
      />
      <button className={styles.AddButton} onClick={handleOnButtonClick}>
        <IoMdAddCircle />
      </button>
    </div>
  );
}

export default Input;
