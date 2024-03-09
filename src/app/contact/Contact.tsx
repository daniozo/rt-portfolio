import { ChangeEvent, FormEvent, useState } from "react";
import { useInView } from "react-intersection-observer";
import SocialLinks from "../components/Socials-links";
import CONTENT from "../../utils/TextInLanguages";
import { useLang } from "../../utils/useLang";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  // const checkFormInput = () => {
  //   formData.name.trim();
  // };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Envoyer les données du formulaire au serveur ici
    // Effectuer la validation du formulaire ici
  };

  const [contact, contactInView] = useInView({ triggerOnce: true });

  // const input = useRef<HTMLInputElement>(null);
  // const focusInput = () => {
  //   if (input.current) {
  //     input.current.focus();
  //   }
  // };

  const { lang } = useLang();
  const Contact = CONTENT[lang].contact;
  // const titl = CONTENT[lang].contact.sectiontitle;
  // const message = CONTENT[lang].contact.message;
  // const formelement = CONTENT[lang].contact.formelement;

  return (
    <div id="contact" className="section contact">
      <div className="section-title contact-title">{Contact.sectiontitle}</div>
      <div
        ref={contact}
        className={`contact-content ${
          contactInView ? "contact-content-isvisible" : ""
        }`}
      >
        <div id="contact" className="contact-message-wrapper">
          <div className="contact-message">
            <p className="contact-message-part">{Contact.message.firstpart}</p>
            <p className="contact-message-part">{Contact.message.secondpart}</p>
          </div>
          {/* <p className="contact-message">
            Je suis disponible. Si vous avez des questions, des projets
            intéressants ou simplement envie de prendre contact, n'hésitez pas à
            me contacter. Je suis ouvert aux collaborations, aux opportunités
            professionnelles (offre de stage/emploi) et aux discussions sur la
            science, la technologie ou tout autre sujet passionnant.
            <br />
            <br />
            Vous pouvez me joindre par email, par mes réseaux ou en utilisant
            directement le{" "}
            <span
              onClick={focusInput}
              className="contact-message-text-decorate"
            >
              formulaire
            </span>
            .
          </p> */}
          <div className="contact-contact-links">
            <a
              className="contact-link"
              href={"mailto:" + `${SocialLinks.mail.link}`}
            >
              mail
            </a>
            <a
              className="contact-link"
              href={SocialLinks.linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              {/* <label>Nom</label> */}
              <input
                // ref={input}
                type="text"
                name="name"
                value={formData.name}
                placeholder={Contact.formelement.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form-row">
              {/* <label>Email</label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder={Contact.formelement.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form-row">
              {/* <label>Sujet</label> */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                placeholder={Contact.formelement.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form-row">
              {/* <label>Message</label> */}
              <textarea
                name="message"
                value={formData.message}
                placeholder={Contact.formelement.message}
                onChange={handleInputChange}
              />
            </div>
            <button className="contact-submit-button" type="submit">
              {Contact.formelement.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
