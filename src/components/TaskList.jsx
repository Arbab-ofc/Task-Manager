import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import './TaskList.css';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return <p>No tasks added yet.</p>;

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
