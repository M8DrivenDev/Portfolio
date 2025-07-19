import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaRedditAlien,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./index.css";
import { useEffect, useRef } from "react";

const SideLinks = () => {
  const sideLinksRef = useRef(null);

  useEffect(() => {
    const sideLinksElement = sideLinksRef.current;
    if (!sideLinksElement) return;

    // Create intersection observer for optimal performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when section comes into view
            entry.target.classList.add('animate-in');
            // Disconnect observer after first animation to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Trigger when 30% of the section is visible
        threshold: 0.3,
        // Start animation when element is about to enter viewport
        rootMargin: '0px 0px -20px 0px'
      }
    );

    observer.observe(sideLinksElement);

    // Cleanup
    return () => {
      if (sideLinksElement) {
        observer.unobserve(sideLinksElement);
      }
    };
  }, []);

  return (
    <div 
      ref={sideLinksRef}
      className="side-links side-links-animate"
    >
      <ul className="icons">
        <li className="icon-item" data-index="0">
          <a
            href="https://discordapp.com/users/1381677237333397546"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
        </li>
        <li className="icon-item" data-index="1">
          <a href="https://github.com/m8drivendev" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className="icon-item" data-index="2">
          <a href="https://x.com/M8DrivenDev" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </li>
        <li className="icon-item" data-index="3">
          <a href="https://www.instagram.com/m8drivendev/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li className="icon-item" data-index="4">
          <a href="https://www.tiktok.com/@drivendev" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </li>
        <li className="icon-item" data-index="5">
          <a href="https://www.reddit.com/user/M8DrivenDev/" target="_blank" rel="noopener noreferrer">
            <FaRedditAlien />
          </a>
        </li>
        <li className="icon-item" data-index="6">
          <a href="https://www.youtube.com/@M8DrivenDev" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideLinks;
