import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRedditAlien,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./index.css";

const SideLinks = () => {
  return (
    <div className="side-links">
      <ul className="icons">
        <li>
          <a
            href="https://discordapp.com/users/1381677237333397546"
            target="_blank"
          >
            <FaDiscord />
          </a>
        </li>
        <li>
          <a href="https://github.com/M8DrivenDev" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/m8drivendev/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://x.com/M8DrivenDev" target="_blank">
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/m8drivendev/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@drivendev" target="_blank">
            <FaTiktok />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/M8DrivenDev/" target="_blank">
            <FaRedditAlien />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@M8DrivenDev" target="_blank">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideLinks;
