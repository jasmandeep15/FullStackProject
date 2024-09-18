import styles from "./Button.module.css";
function Button({ onKeyDown }) {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttons}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onKeyDown(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default Button;
