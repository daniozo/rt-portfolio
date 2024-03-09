import "./Settings.css";
import LangToggle from "../langtoogle/LangToggle";
import ThemeToggle from "../themetoggle/ThemeToggle";

const Settings = () => {
  return (
    <div className="settings">
      <ThemeToggle />
      <LangToggle />
    </div>
  );
};

export default Settings;
