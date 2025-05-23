import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./TaskForm.css";

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    addTask(newTask);
    setTitle(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
