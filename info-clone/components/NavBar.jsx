import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-bar-left">
          <button className="open-nav">
            <FaBars />
          </button>
          <button className="close-nav">
            <FaTimes />
          </button>
        </div>
      </nav>
    </header>
  );
}
