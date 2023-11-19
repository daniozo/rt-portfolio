import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Contact.css";
import SocialLinks from "../components/Socials-links";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

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

  const input = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (input.current) {
      input.current.focus();
    }
  };

  return (
    <div id="contact" className="section contact">
      <div className="section-title contact-title">Contactez-moi</div>
      <div
        ref={contact}
        className={`contact-content ${
          contactInView ? "contact-content-isvisible" : ""
        }`}
      >
        <div id="contact" className="contact-message-wrapper">
          <p className="contact-message">
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
          </p>
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
                ref={input}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Nom"
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form-row">
              {/* <label>Email</label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form-row">
              {/* <label>Sujet</label> */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Sujet"
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-form-row">
              {/* <label>Message</label> */}
              <textarea
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleInputChange}
              />
            </div>
            <button className="contact-submit-button" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
