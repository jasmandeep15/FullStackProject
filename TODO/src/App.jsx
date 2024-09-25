import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import Input from "./components/Input";
import TaskContainer from "./components/TaskContainer";
import styles from "./App.module.css";
import { TodoItemsContext } from "./store/TodoItems-store";

function App() {
  const taskItems = [
    {
      id: "1",
      taskName: "jasmandeep",
      taskDate: "12345",
    },
    {
      id: "2",
      taskName: "Ramandeep",
      taskDate: "12345",
    },
    {
      id: "3",
      taskName: "Japna chawla",
      taskDate: "12345",
    },
    {
      id: "4",
      taskName: "Mandeep kaur",
      taskDate: "12345",
    },
  ];
  const [task, setTask] = useState(taskItems);

  let setVal = (name, date) => {
    setTask((currentVal) => {
      const newTaskItems = [...currentVal, { taskName: name, taskDate: date }];
      return newTaskItems;
    });
  };

  const handleDelete = (itemName) => {
    const newTaskItems = task.filter((item) => item.taskName !== itemName);
    setTask(newTaskItems);
  };
  let content;
  if (task.length === 0) {
    content = <p>Empty List</p>;
  }

  return (
    <>
      <TodoItemsContext.Provider
        value={{ task: task, setVal: setVal, handleDelete: handleDelete }}
      >
        <center>
          <div className={styles.Main}>
            <AppName></AppName>
            <Input></Input>
            {content}
            <TaskContainer></TaskContainer>
          </div>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
