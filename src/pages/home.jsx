import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to TaskNest 🗂️</h2>
      <p>Organize your life, one task at a time.</p>
      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>
    </div>
  );
}