export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-bar-left">
          <img className="nav-bar-logo" src="/beeyondai.png" alt="logo" />
          <ul className="nav-bar-list">
            <li className="list-item">Features</li>
            <li className="list-item">Pricing</li>
            <li className="list-item">FAQs</li>
          </ul>
        </div>
        <div className="nav-bar-btn">
          <select name="select-lang" id="select-lang">
            <option className="select-lang-en" value="en">
              English
            </option>
            <option className="select-lang-jp" value="jp">
              Japanese
            </option>
            <option className="select-lang-fr" value="fr">
              French
            </option>
            <option className="select-lang-zh" value="zh">
              Chinese
            </option>
          </select>
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
        </div>
      </nav>
    </header>
  );
}
