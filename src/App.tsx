import "./App.css";
import Footer from "./app/components/footer/Footer";
import Navbar from "./app/components/navbar/Navbar";
import Contact from "./app/contact/Contact";
import Experience from "./app/experience/Experience";
import Home from "./app/home/Home";
import Projects from "./app/projects/Projets";
import Technologies from "./app/techologies/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
