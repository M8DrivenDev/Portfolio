import { useEffect, useRef } from "react";
import Divider from "../../ui/divider";
import PrimaryBtn from "../../ui/primaryBtn";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DotBox from "../../ui/dotBox";
import { HollowRect } from "../../ui/hollowRect";
import "./index.css";

const AboutMeSection = () => {
  const navigate = useNavigate();
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
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '-30px 0px', // Start animation 30px before entering viewport
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
      className="about-section" 
      ref={sectionRef}
    >
      <div className="skills-divider animate-item" data-delay="0">
        <Divider dividerHeading="About-Me" />
      </div>
      <div className="about-container">
        <div className="about-square animate-item animate-shape" data-delay="200">
          <HollowRect height={200} width={200} />
        </div>
        <div className="about-text-container">
          <h4 className="text-primary animate-item" data-delay="100">
            Hello, I'm M8DrivenDev!
          </h4>
          <p className="text-gray animate-item" data-delay="300">
            I'm a self-taught full-stack developer and software engineer. I
            build modern, high-performance websites from scratch—transforming
            ideas into fast, responsive, and user-friendly web experiences.
            Whether it's a clean portfolio, a slick product dashboard, or a
            full-stack web app, I make sure it works beautifully and speaks your
            brand.
          </p>
          <p className="text-gray animate-item" data-delay="400">
            Over the past few years, I've helped clients create their online
            presence with clean code and smart design choices. I'm also a
            content creator, sharing my journey through tech, coding, and
            building in public—with a few keyboard smashes along the way. Always
            learning. Always building. Let's turn your ideas into something real
            (and awesome).
          </p>
          <div className="animate-item" data-delay="500">
            <PrimaryBtn onClick={() => navigate("/about-me")}>
              Read More
              <FaArrowRight />
            </PrimaryBtn>
          </div>
        </div>
        <div className="about-img-container">
          <div className="animate-item animate-image" data-delay="250">
            <img className="about-img" src="./img-1.png" alt="img" />
          </div>
          <div className="photo-dots-1 animate-item animate-dots" data-delay="600">
            <DotBox width={150} height={70} dotSpacing={15} />
          </div>
          <div className="photo-dots-2 animate-item animate-dots" data-delay="700">
            <DotBox width={100} height={100} dotSpacing={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
