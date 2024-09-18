import { createContext } from "react";

export const TodoItemsContext = createContext({
  task: [],
  setVal: () => {},
  handleDelete: () => {},
});
