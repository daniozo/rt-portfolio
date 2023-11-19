import "./Experience.css";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [experience, experienceInView] = useInView({ triggerOnce: true });

  return (
    <div id="experience" className="section experience">
      <div className="section-title-wrapper">
        <span className="section-title">A propos de moi</span>
      </div>
      <div
        ref={experience}
        className={`experience-content ${
          experienceInView ? "experience-content-isvisible" : ""
        }`}
      >
        <div className="experience-timeline">
          <ul className="experience-timeline-holder">
            <li className="experience-timeline-event">
              <span className="experience-timeline-circle"></span>
              <div className="experience-timeline-content">
                <b>2019 - 2020</b>&nbsp;&nbsp;Obtention de mon baccalauréat
                scientifique.
              </div>
              <div className="experience-timeline-date">2020</div>
            </li>
            <li className="experience-timeline-event">
              <span className="experience-timeline-circle"></span>
              <div className="experience-timeline-content">
                <b>2021 - 2023</b>&nbsp;&nbsp;Intégration des classes
                préparatoires dans une école d'ingénieur généraliste avec
                exploration des notions tels que les mathématiques,
                l'électricité, la mécanique et la programmation.
              </div>
              <div className="experience-timeline-date">2021</div>
            </li>
            <li className="experience-timeline-event">
              <span className="experience-timeline-circle"></span>
              <div className="experience-timeline-content">
                <b>Aujourd'hui</b>&nbsp;&nbsp;Actuellement en première année de
                cycle ingénieur. Continuité des programmes généralistes.
                Découverte de la modélisation orientée objet et des bases de
                données.
              </div>
              <div className="experience-timeline-date">2023</div>
            </li>
            <li className="experience-timeline-event">
              <span className="experience-timeline-circle"></span>
              <div className="experience-timeline-content">
                Souhaite travailler avec des personnes motivées afin d'apporter
                des solutions concrètes et utiles aux problèmes exprimés.
              </div>
              <div className="experience-timeline-date">Futur</div>
            </li>
          </ul>
        </div>
        <p className="experience-cover-letter">
          Je me suis toujours posé des questions sur le monde qui m'entoure.
          Très tôt, je voulais comprendre le sens de la vie, l'origine de
          l'univers et la place de l'homme dans tout cela. J'ai vite compris que
          ces questions me dépassaient, mais une chose m'était sûre : il fallait
          que je trouve ma place. <br />
          <br /> Je me suis alors découvert une passion pour les activités
          nécessitant de la réflexion. Cette soif de compréhension m'a
          naturellement conduit à plonger dans le monde de la programmation et
          du développement. En explorant les langages informatiques, j'ai trouvé
          un moyen de donner forme à mes idées, de résoudre des problèmes et de
          créer quelque chose de tangible à partir de l'abstrait de ma pensée.
          <br />
          <br />
          Aujourd’hui, avec le développement de nouvelles technologies et
          outils, notamment de l’intelligence artificielle, mon regard se dirige
          vers l’avenir et se focalise plus sur l’utilisation de ces
          technologies dans l’amélioration de nos conditions de vie.
        </p>
      </div>
    </div>
  );
};

export default Experience;
