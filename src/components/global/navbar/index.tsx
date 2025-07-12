import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "../../ui/hamburger";
import "./index.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about-me", label: "About‑Me" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as HTMLElement).closest(".navbar")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnScroll = () => isMenuOpen && setIsMenuOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [isMenuOpen]);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <>
      <nav className="navbar">
        {/* logo / brand */}
        <div className="nav-logo-container">
          <img src="./logo-white.svg" alt="logo" className="nav-logo" />
          <NavLink to="/" className="brand">
            M8DrivenDev
          </NavLink>
        </div>

        <Hamburger onClick={toggleMenu} isOpen={isMenuOpen} />

        {/* desktop nav */}
        <ul className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-nav-link" : ""}`
                }
              >
                <span className="text-primary">#</span> {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* mobile overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu">
          <ul>
            {navLinks.map(({ to, label }, idx) => (
              <li
                key={to}
                className="mobile-nav-item"
                style={{ ["--delay" as any]: idx }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "active" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-primary">#</span> {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
