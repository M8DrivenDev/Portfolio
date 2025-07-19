import React, { useEffect, useRef } from "react";
import {
  FaBitcoin,
  FaDiscord,
  FaEthereum,
  FaGithub,
  FaInstagram,
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
  const footerRef = useRef(null);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Intersection Observer for performance-optimized scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  return (
    <footer ref={footerRef} className="footer-animated">
      <div className="footer-container">
        <div className="footer-text-container">
          <div
            className="footer-left animate-item"
            style={{ "--delay": "0.1s" } as React.CSSProperties}
          >
            <div className="nav-logo-container">
              <img src="./logo-white.svg" alt="logo" className="nav-logo" />
              <a href="/">M8DrivenDev</a>
            </div>
            <p className="text-gray">
              Software Engineer and Full-Stack Web Developer
            </p>
          </div>
          <div
            className="footer-mid animate-item"
            style={{ "--delay": "0.2s" } as React.CSSProperties}
          >
            <h3 className="text-white">Support Me</h3>
            <ul className="support-container">
              <li
                className="animate-item"
                style={{ "--delay": "0.3s" } as React.CSSProperties}
              >
                <div
                  className="support-item"
                  onClick={() =>
                    handleCopy("bc1qzqz2se9f5p44tnx2ukyq00mjnae78ntkyhlusy")
                  }
                >
                  <FaBitcoin size={30} />{" "}
                  <p>bc1qzqz2se9f5p44tnx2ukyq00mjnae78ntkyhlusy</p>
                </div>
                <CopyBtn text="bc1qzqz2se9f5p44tnx2ukyq00mjnae78ntkyhlusy" />
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "0.4s" } as React.CSSProperties}
              >
                <div
                  className="support-item"
                  onClick={() =>
                    handleCopy("0xe3529f14cd23c6Fd7a9603Ff464838a567823624")
                  }
                >
                  <FaEthereum size={30} />{" "}
                  <p>0xe3529f14cd23c6Fd7a9603Ff464838a567823624</p>
                </div>
                <CopyBtn text="0xe3529f14cd23c6Fd7a9603Ff464838a567823624" />
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "0.5s" } as React.CSSProperties}
                onClick={() =>
                  handleCopy("FEJxURKJ2TXoeGK3vb4n3x99MoNmr6JztYPZXLXon7er")
                }
              >
                <div className="support-item">
                  <SiSolana size={30} />{" "}
                  <p>FEJxURKJ2TXoeGK3vb4n3x99MoNmr6JztYPZXLXon7er</p>
                </div>
                <CopyBtn text="FEJxURKJ2TXoeGK3vb4n3x99MoNmr6JztYPZXLXon7er" />
              </li>
            </ul>
          </div>
          <div
            className="footer-right animate-item"
            style={{ "--delay": "0.6s" } as React.CSSProperties}
          >
            <h3 className="text-white">Media</h3>
            <ul>
              <li
                className="animate-item"
                style={{ "--delay": "0.7s" } as React.CSSProperties}
              >
                <a
                  href="mailto:m8.driven.dev@gmail.com?subject=Let's%20Connect&body=Hi%20there!%20I%20wanted%20to%20reach%20out..."
                  target="_blank"
                >
                  <MdEmail />
                </a>
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "0.8s" } as React.CSSProperties}
              >
                <a
                  href="https://discordapp.com/users/1381677237333397546"
                  target="_blank"
                >
                  <FaDiscord />
                </a>
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "0.9s" } as React.CSSProperties}
              >
                <a href="https://github.com/m8drivendev" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "1.0s" } as React.CSSProperties}
              >
                <a href="https://x.com/M8DrivenDev" target="_blank">
                  <FaXTwitter />
                </a>
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "1.1s" } as React.CSSProperties}
              >
                <a
                  href="https://www.instagram.com/m8drivendev/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "1.2s" } as React.CSSProperties}
              >
                <a href="https://www.tiktok.com/@drivendev" target="_blank">
                  <FaTiktok />
                </a>
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "1.3s" } as React.CSSProperties}
              >
                <a
                  href="https://www.reddit.com/user/M8DrivenDev/"
                  target="_blank"
                >
                  <FaRedditAlien />
                </a>
              </li>
              <li
                className="animate-item"
                style={{ "--delay": "1.4s" } as React.CSSProperties}
              >
                <a href="https://www.youtube.com/@M8DrivenDev" target="_blank">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p
          className="footer-finish animate-item"
          style={{ "--delay": "1.5s" } as React.CSSProperties}
        >
          &copy; Copyright {currentYear}. Made by M8DrivenDev
        </p>
      </div>
    </footer>
  );
};

export default Footer;
