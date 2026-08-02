import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const [tasks, setTasks] = useState(() =>
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        title: "Study JS",
        description: "Finish Arrays & Objects",
        dueDate: "2026-08-10",
        priority: "High",
        status: "Pending",
      },
      {
        id: 2,
        title: "Buy Groceries",
        description: "Milk, Bread, Eggs",
        dueDate: "2026-08-05",
        priority: "Medium",
        status: "In Progress",
      },
    ]
  );

  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Reminder
  useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date().toISOString().split("T")[0];
      tasks.forEach((t) => {
        if (t.status !== "Completed" && t.dueDate === today) {
          alert(`⏰ Reminder: "${t.title}" is due today!`);
        }
      });
    }, 60000);
    return () => clearInterval(timer);
  }, [tasks]);

  const addTask = (data) => {
    setTasks([...tasks, { id: Date.now(), ...data }]);
  };

  const updateTask = (data) => {
    setTasks(tasks.map((t) => (t.id === editTask.id ? { ...t, ...data } : t)));
    setEditTask(null);
  };

  const deleteTask = (id) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => {
        if (t.id !== id) return t;
        return {
          ...t,
          status: t.status === "Completed" ? "Pending" : "Completed",
        };
      })
    );
  };

  const filtered = tasks.filter((t) => {
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || t.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="tasks-page">
      <TaskForm
        onAdd={addTask}
        editTask={editTask}
        onUpdate={updateTask}
        onCancel={() => setEditTask(null)}
      />

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="task-list">
        {filtered.length === 0 ? (
          <p className="empty">No tasks found 🥲</p>
        ) : (
          filtered.map((t) => (
            <TaskCard
              key={t.id}
              task={t}
              onEdit={setEditTask}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))
        )}
      </div>
    </div>
  );
}