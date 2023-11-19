import "./Footer.css";
import SocialLinks from "../Socials-links";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="footer">
      <div className="socials-links">
        <a
          href={"mailto:" + `${SocialLinks.mail.link}`}
          rel="noopener noreferrer"
        >
          <SocialLinks.mail.component />
        </a>
        <a
          href={SocialLinks.github.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLinks.github.component />
        </a>
        <a
          href={SocialLinks.linkedin.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLinks.linkedin.component />
        </a>
      </div>
      <div className="footer-page">
        <span className="footer-page-element footer-page-element-copy">
          &copy;
        </span>
        <span className="footer-page-element">{currentYear}</span>
        <span className="footer-page-element d">d</span>
        <span className="footer-page-element">Daniel Tovignon</span>
      </div>
    </div>
  );
};

export default Footer;
