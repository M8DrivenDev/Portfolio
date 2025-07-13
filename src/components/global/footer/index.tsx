import {
  FaBitcoin,
  FaDiscord,
  FaEthereum,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRedditAlien,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./index.css";
import { MdEmail } from "react-icons/md";
import CopyBtn from "../../ui/copyBtn";
import { SiSolana } from "react-icons/si";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-text-container">
          <div className="footer-left">
            <div className="nav-logo-container">
              <img src="./logo-white.svg" alt="logo" className="nav-logo" />
              <a href="/">M8DrivenDev</a>
            </div>
            <p className="text-gray">
              Software Engineer and Full-Stack Web Developer
            </p>
          </div>
          <div className="footer-mid">
            <h3 className="text-white">Support Me</h3>
            <ul className="support-container">
              <li>
                <div className="support-item">
                  <FaBitcoin size={30} />{" "}
                  <p>bc1qzqz2se9f5p44tnx2ukyq00mjnae78ntkyhlusy</p>
                </div>
                <CopyBtn text="bc1qzqz2se9f5p44tnx2ukyq00mjnae78ntkyhlusy" />
              </li>
              <li>
                <div className="support-item">
                  <FaEthereum size={30} />{" "}
                  <p>0xe3529f14cd23c6Fd7a9603Ff464838a567823624</p>
                </div>
                <CopyBtn text="0xe3529f14cd23c6Fd7a9603Ff464838a567823624" />
              </li>
              <li>
                <div className="support-item">
                  <SiSolana size={30} />{" "}
                  <p>FEJxURKJ2TXoeGK3vb4n3x99MoNmr6JztYPZXLXon7er</p>
                </div>
                <CopyBtn text="FEJxURKJ2TXoeGK3vb4n3x99MoNmr6JztYPZXLXon7er" />
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="text-white">Media</h3>
            <ul>
              <li>
                <a
                  href="mailto:m8.driven.dev@gmail.com?subject=Let's%20Connect&body=Hi%20there!%20I%20wanted%20to%20reach%20out..."
                  target="_blank"
                >
                  <MdEmail />
                </a>
              </li>
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
                <a
                  href="https://www.linkedin.com/in/m8drivendev/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://x.com/M8DrivenDev" target="_blank">
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/m8drivendev/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@drivendev" target="_blank">
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/user/M8DrivenDev/"
                  target="_blank"
                >
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
        </div>
        <p className="footer-finish">
          &copy; Copyright {currentYear}. Made by M8DrivenDev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
