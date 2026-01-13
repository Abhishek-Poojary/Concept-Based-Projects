import { useState, useRef } from "react";

let id=0;

const initialState = [
  { id: ++id, label: "Walk the dog" },
  { id: ++id, label: "Water the plants" },
  { id: ++id, label: "Wash the dishes" },
];

export default function App() {
  const [tasks, setTasks] = useState(initialState);
  const [newtask, setNewTask] = useState("");
  const taskId = useRef(id);

  function handleAdd() {
    taskId.current += 1;
    const obj = { id: taskId.current, label: newtask };
    setTasks((prev) => [...prev, obj]);
    setNewTask("");
  }

  function handleDelete(id: number) {
    setTasks((prev)=> prev.filter((task)=> task.id !== id));
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={newtask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div>
          <button onClick={handleAdd}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.label}</span>
            <button onClick={()=> handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
