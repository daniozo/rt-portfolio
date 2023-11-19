import "./Technologies.css";
import vite from "/vite.svg";
import nodejs from "/nodejs.svg";
import angular from "/angular.svg";
import tailwind from "/tailwind.svg";
import react from "/react.svg";
import java from "/java.svg";
import python from "/python.svg";
import typescript from "/typescript.svg";
import html from "/html.svg";
import css from "/css.svg";
// import express from "/express.svg";
// import typescript from "/typescript.svg";

const Technologies = () => {
  return (
    <div id="technologies" className="section techologies">
      <div className="section-title technologie-title">Mes compétences</div>
      <div className="technologies-wrapper">
        <ul className="technologies-content">
          <li className="technologie">
            <img
              src={html}
              className="technologie-logo"
              alt="html logo"
              title="HTML"
            />
          </li>
          <li className="technologie">
            <img
              src={css}
              className="technologie-logo"
              alt="css logo"
              title="CSS"
            />
          </li>
          <li className="technologie">
            <img
              src={typescript}
              className="technologie-logo"
              alt="typescript logo"
              title="Typescript"
            />
          </li>
          <li className="technologie">
            <img
              src={react}
              className="technologie-logo"
              alt="react logo"
              title="React"
            />
          </li>
          <li className="technologie">
            <img
              src={angular}
              className="technologie-logo"
              alt="angular logo"
              title="Angular"
            />
          </li>
          <li className="technologie">
            <img
              src={tailwind}
              className="technologie-logo"
              alt="tailwind logo"
              title="TailwindCSS"
            />
          </li>
          {/* <li className="technologie">
            <img
              src={express}
              className="technologie-logo"
              alt="express logo"
              title="express"
            />
          </li> */}
          <li className="technologie">
            <img
              src={nodejs}
              className="technologie-logo"
              alt="node js logo"
              title="NodeJs"
            />
          </li>
          <li className="technologie">
            <img
              src={vite}
              className="technologie-logo"
              alt="vite logo"
              title="ViteJS"
            />
          </li>
          <li className="technologie">
            <img
              src={python}
              className="technologie-logo"
              alt="python logo"
              title="Python"
            />
          </li>
          <li className="technologie">
            <img
              src={java}
              className="technologie-logo"
              alt="java logo"
              title="Java"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
