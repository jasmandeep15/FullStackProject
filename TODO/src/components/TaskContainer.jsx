import { useContext } from "react";
import styles from "./TackContainer.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItems-store";

function TaskContainer() {
  const taskObject = useContext(TodoItemsContext);
  const task = taskObject.task;
  // console.log(contextprovider);

  const deleteHandler = taskObject.handleDelete;

  return (
    <div className={styles.TaskContainer}>
      {task.map((item) => {
        return (
          <div key={item.taskName} className={styles.Task}>
            <div className={styles.TaskName}>{item.taskName}</div>
            <div className={styles.TaskName}>{item.taskDate}</div>
            <button
              className={styles.DeleteButton}
              onClick={() => deleteHandler(item.taskName)}
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TaskContainer;
