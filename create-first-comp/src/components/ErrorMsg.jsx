function ErrorMsg({ food }) {
  return <>{food.length === 0 ? <h3>I am still hungry</h3> : null}</>;
}

export default ErrorMsg;
