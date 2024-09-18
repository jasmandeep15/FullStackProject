import styles from "./Input.module.css";
function Input({ handleOnKeyDown }) {
  return (
    <div className={styles.divv}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter here"
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
}
export default Input;
