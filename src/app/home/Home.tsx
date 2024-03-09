import "./Home.css";
import photo from "/photo.png";
import SocialLinks from "../components/Socials-links";
import CONTENT from "../../utils/TextInLanguages";
import { useLang } from "../../utils/useLang";

const Home = () => {
  const { lang } = useLang();

  const homeText = CONTENT[lang].home;

  return (
    <div id="home" className="section home">
      <div className="home-content">
        <div className="home-photo-wrapper">
          <img className="home-photo" src={photo} alt="Ma photo" />
        </div>
        <div className="home-greeting">
          <span className="home-greeting-iam">{homeText.homeiam}</span>
          <span className="home-greeting-name">Daniel Tovignon</span>
        </div>
        <div className="home-me">{homeText.homeme}</div>
        <div className="home-links">
          <a
            className="home-link"
            href={"mailto:" + `${SocialLinks.mail.link}`}
          >
            mail
          </a>
          <a
            className="home-link"
            href={SocialLinks.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
