import "./Home.css";
import photo from "/photo.png";
import SocialLinks from "../components/Socials-links";

const HomePhoto = () => {
  return (
    <div className="home-photo-wrapper">
      <img className="home-photo" src={photo} alt="Ma photo" />
    </div>
  );
};

const HomeGreeting = () => {
  return (
    <div className="home-greeting">
      <span className="home-greeting-iam">Salut, je suis</span>
      <span className="home-greeting-name">Daniel Tovignon</span>
    </div>
  );
};

const HomeMe = () => {
  return (
    <div className="home-me">
      Une personne passionnée avec de grandes idées.
    </div>
  );
};

const HomeLinks = () => {
  return (
    <div className="home-links">
      <a className="home-link" href={"mailto:" + `${SocialLinks.mail.link}`}>
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
  );
};

const Home = () => {
  return (
    <div id="home" className="section home">
      <div className="home-content">
        <HomePhoto />
        <HomeGreeting />
        <HomeMe />
        <HomeLinks />
      </div>
    </div>
  );
};

export default Home;
