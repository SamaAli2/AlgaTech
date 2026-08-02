export default function TaskCard({ task, onEdit, onDelete, onToggle }) {
  return (
    <div className={`task-card ${task.priority.toLowerCase()} ${task.status === "Completed" ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-meta">
        <span>📅 {task.dueDate}</span>
        <span className="badge">{task.status}</span>
        <span>⚡ {task.priority}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>✏️ Edit</button>
        <button onClick={() => onToggle(task.id)}>✅ Toggle</button>
        <button className="delete" onClick={() => onDelete(task.id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}