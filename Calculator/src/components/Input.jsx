import styles from "./Input.module.css";
function Input({ calVal }) {
  return (
    <>
      <input type="text" className={styles.input} value={calVal} readOnly />
    </>
  );
}

export default Input;
