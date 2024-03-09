import "./App.css";
import Loading from "./app/components/loading/Loading";
import Footer from "./app/components/footer/Footer";
import Navbar from "./app/components/navbar/Navbar";
import Contact from "./app/contact/Contact";
import Experience from "./app/experience/Experience";
import Home from "./app/home/Home";
import Projects from "./app/projects/Projets";
import Technologies from "./app/techologies/Technologies";
import { LangProvider } from "./utils/LangContext";
import Settings from "./app/components/settings/Settings";

function App() {
  return (
    <>
      <Loading />
      <LangProvider>
        <Navbar />
        <Home />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <Settings />
      </LangProvider>
    </>
  );
}

export default App;
