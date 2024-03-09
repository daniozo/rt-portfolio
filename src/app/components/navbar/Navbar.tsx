import "./Navbar.css";
import CONTENT from "../../../utils/TextInLanguages";
import { useLang } from "../../../utils/useLang";

const Navbar = () => {
  const ScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };
  const { lang } = useLang();

  const navList = CONTENT[lang].navbar.navlinks;

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo-wrapper">
          <a href="/" className="site-logo">
            d
          </a>
        </div>
        <ul className="navbar-items">
          {navList.map((section, index) => (
            <li
              key={index}
              className="navbar-item"
              onClick={() => ScrollToSection(section.anchor)}
            >
              {section.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
