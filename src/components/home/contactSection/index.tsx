import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import Divider from "../../ui/divider";
import "./index.css";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="skills-divider">
        <Divider dividerHeading="Contact" />
      </div>
      <div className="contact-container">
        <div className="contact-text">
          <p className="text-gray">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>
        <div className="contact-media">
          <p className="text-white">Message Me here</p>
          <ul>
            <li>
              <a
                href="https://discordapp.com/users/1381677237333397546"
                target="_blank"
              >
                <FaDiscord /> Discord
              </a>
            </li>
            <li>
              <a
                href="mailto:m8.driven.dev@gmail.com?subject=Let's%20Connect&body=Hi%20there!%20I%20wanted%20to%20reach%20out..."
                target="_blank"
              >
                <MdEmail /> Gmail
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/drivendev/" target="_blank">
                <FaLinkedin /> Linkedin
              </a>
            </li>
            <li>
              <a href="https://x.com/M8DrivenDev" target="_blank">
                <FaXTwitter /> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/m8drivendev/" target="_blank">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
