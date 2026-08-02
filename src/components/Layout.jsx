import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🗂️ TaskNest</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <button
          className="theme-btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        © 2026 TaskNest - Personal Task Manager
      </footer>
    </div>
  );
}