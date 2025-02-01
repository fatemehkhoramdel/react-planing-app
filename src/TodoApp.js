import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded w-64"
          placeholder="افزودن وظیفه جدید..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          افزودن
        </button>
      </div>
      <ul className="mt-4 w-72">
        {tasks.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center p-2 bg-white shadow rounded mt-2 ${
              t.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleTask(t.id)} className="cursor-pointer">
              {t.text}
            </span>
            <FaTrash onClick={() => deleteTask(t.id)} className="text-red-500 cursor-pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
}
