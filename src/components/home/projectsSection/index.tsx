import Divider from "../../ui/divider";
import DotBox from "../../ui/dotBox";
import { HollowRect } from "../../ui/hollowRect";
import ProjectCard from "../../ui/projectCard";
import "./index.css";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef } from "react";

const ProjectsSection = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const projectsElement = projectsRef.current;
    if (!projectsElement) return;

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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(projectsElement);

    // Cleanup
    return () => {
      if (projectsElement) {
        observer.unobserve(projectsElement);
      }
    };
  }, []);

  return (
    <div 
      ref={projectsRef}
      className="projects-section projects-animate"
    >
      <div className="projects-divider animate-divider">
        <div className="divider-wrapper">
          <Divider dividerHeading="Projects" />
        </div>
        <div className="view-all-link">
          <a href="https://github.com/m8drivendev" target="_blank" rel="noopener noreferrer">
            <span className="link-text">View all</span>
            <span className="link-arrow">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-dots animate-dots">
          <DotBox width={100} height={100} />
        </div>
        <div className="project-card-wrapper" data-index="0">
          <ProjectCard
            imgSrc="./vox-mail.png"
            heading="Vox Mail"
            desc="AI Brand Manager that negotiate and make deals on your behalf"
            projectTech="Nextjs React Tailwindcss websockets next-auth"
            viewMore={false}
          />
        </div>
        <div className="project-card-wrapper" data-index="1">
          <ProjectCard
            imgSrc="./pipeline-header.png"
            heading="Pipeline"
            desc="Whatsapp clone web app"
            projectTech="React Tailwindcss websockets expressjs nodejs"
            viewMore={true}
            redirectUrl="https://github.com/m8drivendev/Pipeline"
          />
        </div>
        <div className="project-card-wrapper" data-index="2">
          <ProjectCard
            imgSrc="./shell-header.png"
            heading="Gates Of Shell"
            desc="This is a simple shell program that allows users to excute commands"
            projectTech="C Programming language"
            viewMore={true}
            redirectUrl="https://github.com/m8drivendev/Gates-Of-Shell"
          />
        </div>
        <div className="projects-rect animate-rect">
          <HollowRect width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
