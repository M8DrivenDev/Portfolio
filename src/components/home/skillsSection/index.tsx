import { useEffect, useRef } from "react";
import Divider from "../../ui/divider";
import DotBox from "../../ui/dotBox";
import { HollowRect } from "../../ui/hollowRect";
import SkillBox from "../../ui/skillBox";
import "./index.css";

const SkillsSection = () => {
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
        rootMargin: '-50px 0px', // Start animation 50px before entering viewport
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
      className="skills-section" 
      ref={sectionRef}
    >
      <div className="skills-divider animate-item" data-delay="0">
        <Divider dividerHeading="Skills" />
      </div>
      <div className="skills-container">
        <div className="skills-shapes">
          <div className="floating-logo animate-item" data-delay="100">
            <img
              src="./logo-outline-pink.svg"
              className="skills-logo"
              alt="logo"
            />
          </div>
          <div className="floating-shape-1 animate-item" data-delay="200">
            <HollowRect
              width={100}
              height={100}
              color="var(--color-primary)"
              border="2.5px"
            />
          </div>
          <div className="floating-shape-2 animate-item" data-delay="250">
            <HollowRect width={50} height={50} color="var(--color-primary)" />
          </div>
          <div className="floating-shape-3 animate-item" data-delay="300">
            <DotBox width={100} height={100} />
          </div>
          <div className="floating-shape-4 animate-item" data-delay="350">
            <DotBox width={100} height={100} color="var(--color-gray)" />
          </div>
        </div>
        <div className="skill-boxes">
          <div className="animate-item" data-delay="400">
            <SkillBox
              heading="Languages"
              skills="JavaScript, TypeScript, Node.js, Python, Go, Rust, C, C++, Bash/Zsh, Lua"
            />
          </div>
          <div className="boxes-section-1">
            <div className="animate-item" data-delay="500">
              <SkillBox
                heading="Databases"
                skills="SQLite, PostgreSQL, Mongo, Redis, MySQL"
              />
            </div>
            <div className="animate-item" data-delay="550">
              <SkillBox
                heading="Tools"
                skills="VSCode, Neovim, Git, Tmux, zsh, Linux, Arch"
              />
            </div>
          </div>
          <div className="boxes-section-2">
            <div className="animate-item" data-delay="600">
              <SkillBox
                heading="Frontend"
                skills="HTML, CSS/SCSS, React.js, Next.js, Tailwind, Vite, Vanilla JS/DOM manipulation"
              />
            </div>
            <div className="animate-item" data-delay="650">
              <SkillBox
                heading="Backend"
                skills="Express.js, Flask, Django, Drizzle ORM, Prisma ORM, mongoose, NextAuth, Nodemailer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
