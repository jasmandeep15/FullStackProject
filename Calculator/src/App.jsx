import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (key) => {
    if (key === "C") {
      setCalVal("");
    } else if (key === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newValue = calVal + key;
      setCalVal(newValue);
    }
    console.log(key);
  };
  return (
    <div className={styles.outer}>
      <marquee behavior="scroll" direction="left">
        This text will scroll from right to left.
      </marquee>
      <Input calVal={calVal}></Input>
      <Button onKeyDown={onButtonClick}></Button>
    </div>
  );
}

export default App;
