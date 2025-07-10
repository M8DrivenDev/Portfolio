import { useEffect, useState } from "react";
import Hamburger from "../ui/hamburger";
import "./index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (isMenuOpen && !target.closest(".navbar")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/work", label: "work" },
    { href: "/about-me", label: "about-me" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo-container">
          <img src="./logo-white.svg" alt="logo" className="nav-logo" />
          <a href="/" onClick={() => handleLinkClick("/")}>
            M8DrivenDev
          </a>
        </div>
        <Hamburger onClick={toggleMenu} isOpen={isMenuOpen} />
        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-link">
              <a
                href={link.href}
                className={`nav-link ${activeLink === link.href ? "active-nav-link" : ""}`}
                onClick={() => handleLinkClick(link.href)}
              >
                <span className="text-primary">#</span> {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="mobile-nav-item"
                style={{ ["--delay" as keyof React.CSSProperties]: index }}
              >
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeLink === link.href ? "active" : ""}`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <span className="text-primary">#</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
