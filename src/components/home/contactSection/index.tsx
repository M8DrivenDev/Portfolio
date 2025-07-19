import { useEffect, useRef } from "react";
import {
  FaDiscord,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Divider from "../../ui/divider";
import "./index.css";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Intersection Observer for triggering animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            section.classList.add('animate-in');
            
            // Cleanup observer after animation triggers (performance optimization)
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: '-40px 0px', // Start animation 40px before entering viewport
      }
    );

    observer.observe(section);

    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      className="contact-section" 
      ref={sectionRef}
    >
      <div className="skills-divider animate-item" data-delay="0">
        <Divider dividerHeading="Contact" />
      </div>
      <div className="contact-container">
        <div className="contact-text animate-item" data-delay="100">
          <p className="text-gray">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me
          </p>
        </div>
        <div className="contact-media">
          <p className="text-white animate-item" data-delay="200">
            Message Me here
          </p>
          <ul>
            <li className="animate-item social-item" data-delay="300">
              <a
                href="https://discordapp.com/users/1381677237333397546"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord /> Discord
              </a>
            </li>
            <li className="animate-item social-item" data-delay="350">
              <a
                href="mailto:m8.driven.dev@gmail.com?subject=Let's%20Connect&body=Hi%20there!%20I%20wanted%20to%20reach%20out..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail /> Gmail
              </a>
            </li>
            <li className="animate-item social-item" data-delay="400">
              <a 
                href="https://x.com/M8DrivenDev" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter /> Twitter
              </a>
            </li>
            <li className="animate-item social-item" data-delay="450">
              <a 
                href="https://www.instagram.com/m8drivendev/" 
                target="_blank"
                rel="noopener noreferrer"
              >
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
