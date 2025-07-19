import "./index.css";
import PrimaryBtn from "../../ui/primaryBtn";
import DotBox from "../../ui/dotBox";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const handleContactClick = () => {
    navigate("/contact", { replace: false });
  };

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

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
        // Start animation slightly before element enters viewport
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(heroElement);

    // Cleanup
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="hero-section hero-animate"
    >
      <div className="hero-text">
        <h1 className="hero-title">
          M8DrivenDev is a{" "}
          <span className="text-primary hero-highlight">Software Engineer</span> and{" "}
          <span className="text-primary hero-highlight">Full-Stack Web Developer</span>
        </h1>
        <p className="hero-subtitle">He crafts responsive websites where technologies meet creativity</p>
        <div className="hero-btn">
          <PrimaryBtn onClick={handleContactClick}>Contact me !!</PrimaryBtn>
        </div>
      </div>
      <div className="hero-photo">
        <div className="photo-logo">
          <img src="./logo-outline-pink.svg" alt="logo" />
        </div>
        <div className="photo-main">
          <img src="./img-0.png" alt="me.png" />
        </div>
        <div className="photo-dots">
          <DotBox width={100} height={100} dotSpacing={15} />
        </div>
        <div className="photo-status">
          <div className="primary-color-box"></div>
          <p className="text-gray">
            Currently working on <span className="text-white">Vox Mail</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
