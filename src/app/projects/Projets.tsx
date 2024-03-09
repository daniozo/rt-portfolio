import "./Projets.css";
import { useInView } from "react-intersection-observer";
import CONTENT from "../../utils/TextInLanguages";
import { useLang } from "../../utils/useLang";

const Projects = () => {
  const { lang } = useLang();
  const projects = CONTENT[lang].projects;

  const [project, projectInView] = useInView({ triggerOnce: true });

  return (
    <div id="projects" className="section projects">
      <h2 className="section-title projects-title">{projects.sectiontitle}</h2>
      <div
        ref={project}
        className={`projects-wrapper ${
          projectInView ? "projects-wrapper-isvisible" : ""
        }`}
      >
        <div className="project">
          <div className="project-visuel">
            <img
              src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/Portfolios_Featured_Image_06.jpg"
              alt=""
            />
          </div>
          <span className="project-title">Lorem, ipsum dolor</span>
        </div>
        <div className="project">
          <div className="project-visuel">
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6376/files/portfolio-inspiration-hannah-purmort.png?format=webp&v=1556053256"
              alt=""
            />
          </div>
          <span className="project-title">Lorem, ipsum dolor</span>
        </div>
        <div className="project">
          <div className="project-visuel">
            <img
              src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1614670/300/200/m1/fpnw/wm0/oxo_preview-.jpg?1472751613&s=7658f4666094781faa306d07a8f2c0d2"
              alt=""
            />
          </div>
          <span className="project-title">Lorem, ipsum dolor</span>
        </div>
        <div className="project">
          <div className="project-visuel">
            <img
              src="https://th.bing.com/th/id/OIP.v8KZehnjcIEjZ9k2vvhIUQHaE7?w=840&h=559&rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <span className="project-title">Lorem, ipsum dolor</span>
        </div>
      </div>
    </div>
  );
};
export default Projects;
