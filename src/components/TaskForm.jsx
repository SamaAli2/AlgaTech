import { useState, useEffect } from "react";

export default function TaskForm({ onAdd, editTask, onUpdate, onCancel }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editTask) {
      setForm({
        title: editTask.title,
        description: editTask.description,
        dueDate: editTask.dueDate,
        priority: editTask.priority,
        status: editTask.status,
      });
    }
  }, [editTask]);

  const validate = () => {
    const e = {};
    if (!/^[A-Za-z\s]{3,30}$/.test(form.title)) {
      e.title = "❌ Title: 3-30 letters only";
    }
    if (form.description.length < 3) {
      e.description = "❌ Description too short";
    }
    if (!form.dueDate) {
      e.dueDate = "❌ Date is required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    if (editTask) {
      onUpdate({ ...form });
    } else {
      onAdd({ ...form });
    }

    setForm({
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
      status: "Pending",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editTask ? "Edit Task" : "Add New Task"}</h2>

      <div>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        {errors.title && <small>{errors.title}</small>}
      </div>

      <div>
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        {errors.description && <small>{errors.description}</small>}
      </div>

      <div>
        <input
          type="date"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />
        {errors.dueDate && <small>{errors.dueDate}</small>}
      </div>

      <select
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <div className="form-actions">
        <button type="submit">{editTask ? "Update Task" : "Add Task"}</button>
        {editTask && (
          <button type="button" className="cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}