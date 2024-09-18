import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ErrorMsg from "./components/ErrorMsg";
import Item from "./components/Item";
function App() {
  // let food = [];
  let food = ["Apple", "Banana", "grapes", "kiwi", "cheekoo"];

  return (
    <div>
      <h1>Food Items</h1>
      <Item food={food}></Item>
      <ErrorMsg food={food}></ErrorMsg>
    </div>
  );
}

export default App;
