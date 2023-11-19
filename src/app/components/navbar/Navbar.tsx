import "./Navbar.css";

const ScrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView();
  }
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-wrapper">
          <a href="/" className="site-logo">
            d
          </a>
        </div>
        <ul className="navbar-items">
          <li className="navbar-item" onClick={() => ScrollToSection("home")}>
            Accueil
          </li>
          <li
            className="navbar-item"
            onClick={() => ScrollToSection("technologies")}
          >
            Compétences
          </li>
          <li
            className="navbar-item"
            onClick={() => ScrollToSection("projects")}
          >
            Réalisations
          </li>
          <li
            className="navbar-item"
            onClick={() => ScrollToSection("experience")}
          >
            A propos
          </li>
          <li
            className="navbar-item"
            onClick={() => ScrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
