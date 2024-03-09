import "./Experience.css";
import { useInView } from "react-intersection-observer";
import CONTENT from "../../utils/TextInLanguages";
import { useLang } from "../../utils/useLang";

const Experience = () => {
  const [experience, experienceInView] = useInView({ triggerOnce: true });

  const { lang } = useLang();
  const about = CONTENT[lang].about;

  return (
    <div id="experience" className="section experience">
      <div className="section-title-wrapper">
        <span className="section-title">{about.sectiontitle}</span>
      </div>
      <div
        ref={experience}
        className={`experience-content ${
          experienceInView ? "experience-content-isvisible" : ""
        }`}
      >
        <div className="experience-timeline">
          <ul className="experience-timeline-holder">
            {about.timeline.map((time, index) => (
              <li key={index} className="experience-timeline-event">
                <span className="experience-timeline-circle"></span>
                <div className="experience-timeline-content">
                  {time.periode != "" ? (
                    <b>{time.periode}&nbsp;&nbsp;</b>
                  ) : null}
                  {time.timecontent}
                </div>
                <div className="experience-timeline-date">{time.date}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="experience-cover-letter">
          <p className="experience-cover-letter-part">
            {about.cover.firstpart}
          </p>
          <p className="experience-cover-letter-part">
            {about.cover.secondpart}
          </p>
          <p className="experience-cover-letter-part">
            {about.cover.thirdpart}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
