import { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const Initial = Boolean(localStorage.getItem("toggle"));
  // const { toggletheme } = usetheme();

  const [toggle, setToggle] = useState(Initial || false);

  const changeTheme = () => {
    setToggle(!toggle);
    // toggletheme();
  };

  return (
    <div className="theme-toggle">
      <div className="theme-toggle-container">
        <div
          onClick={changeTheme}
          className={`theme-toggle-handler ${
            toggle ? "theme-toggle-handler-left" : "theme-toggle-handler-right"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
