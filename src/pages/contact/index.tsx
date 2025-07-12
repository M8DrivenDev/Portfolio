import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import HeadRoute from "../../components/global/headRoute";
import Navbar from "../../components/global/navbar";
import SideLinks from "../../components/global/sideLinks";
import { MdEmail } from "react-icons/md";
import Divider from "../../components/ui/divider";
import Footer from "../../components/global/footer";
import ContactForm from "../../components/ui/contactForm";
import "./index.css";

const Contact = () => {
  return (
    <div>
      <div className="header">
        <SideLinks />
        <Navbar />
      </div>
      <HeadRoute heading="Contact" subHeading="Reach out to me!" />
      <div className="contact-section">
        <div className="skills-divider">
          <Divider dividerHeading="Email Me" />
        </div>
        <div className="email-me-container">
          <div className="cta">
            <h2 className="text-white">Let’s Build Something Great Together</h2>
            <p className="text-gray">
              Whether you need a stunning website, a rock-solid web app, or just
              want to discuss an idea — I’m here for it. I turn complex ideas
              into smooth, high-performance digital experiences that users love
              and businesses rely on. Looking for someone who actually replies,
              delivers on time, and codes like they mean it? You’re in the right
              place. Clean code, clear communication, and creative solutions —
              that’s what I bring to the table. Drop me a message and let’s make
              your vision real.
            </p>
          </div>
          <div className="email-contact-form">
            <ContactForm />
          </div>
        </div>
        <div className="skills-divider">
          <Divider dividerHeading="Contact Me" />
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
                <a
                  href="https://www.linkedin.com/in/m8drivendev/"
                  target="_blank"
                >
                  <FaLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a href="https://x.com/M8DrivenDev" target="_blank">
                  <FaXTwitter /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/m8drivendev/"
                  target="_blank"
                >
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
