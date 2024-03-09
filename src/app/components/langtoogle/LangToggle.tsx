import { useEffect, useState } from "react";
import "./LangToggle.css";
import { useLang } from "../../../utils/useLang";

const LangToggle = () => {
  const Initial = Boolean(localStorage.getItem("toggle"));
  const { toggleLang } = useLang();

  const [toggle, setToggle] = useState(Initial || false);
  const changeLanguage = () => {
    setToggle(!toggle);
    toggleLang();
  };

  useEffect(() => {
    localStorage.setItem("toggle", toggle.toString());
  }, [toggle]);

  return (
    <div className="lang-toggle">
      <div className="lang-toggle-container">
        <div
          onClick={changeLanguage}
          className={`lang-toggle-handler ${
            toggle ? "lang-toggle-handler-left" : "lang-toggle-handler-right"
          }`}
        ></div>
      </div>
    </div>
  );
};
export default LangToggle;
