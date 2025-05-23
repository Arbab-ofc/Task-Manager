import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskItem.css";

function TaskItem({ task }) {
  const { deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}

export default TaskItem;
