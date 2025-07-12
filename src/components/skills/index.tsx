import Divider from "../ui/divider";
import DotBox from "../ui/dotbox/dotbox";
import { HollowRect } from "../ui/hollowRect";
import SkillBox from "../ui/skillBox";
import "./index.css";

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="skills-divider">
        <Divider dividerHeading="Skills" />
      </div>
      <div className="skills-container">
        <div className="skills-shapes">
          <div className="floating-logo">
            <img
              src="./logo-outline-pink.svg"
              className="skills-logo"
              alt="logo"
            />
          </div>
          <div className="floating-shape-1">
            <HollowRect
              width={100}
              height={100}
              color="var(--color-primary)"
              border="2.5px"
            />
          </div>
          <div className="floating-shape-2">
            <HollowRect width={50} height={50} color="var(--color-primary)" />
          </div>
          <div className="floating-shape-3">
            <DotBox width={100} height={100} />
          </div>
          <div className="floating-shape-4">
            <DotBox width={100} height={100} color="var(--color-gray)" />
          </div>
        </div>
        <div className="skill-boxes">
          <SkillBox
            heading="Languages"
            skills="JavaScript, TypeScript, Node.js, Python, Go, Rust, C, C++, Bash/Zsh, Lua"
          />
          <div className="boxes-section-1">
            <SkillBox
              heading="Databases"
              skills="SQLite, PostgreSQL, Mongo, Redis, MySQL"
            />
            <SkillBox
              heading="Tools"
              skills="VSCode, Neovim, Git, Tmux, zsh, Linux, Arch"
            />
          </div>
          <div className="boxes-section-2">
            <SkillBox
              heading="Frontend"
              skills="HTML, CSS/SCSS, React.js, Next.js, Tailwind, Vite, Vanilla JS/DOM manipulation"
            />
            <SkillBox
              heading="Backend"
              skills="Express.js, Flask, Django, Drizzle ORM, Prizma ORM, mongooze, NextAuth, Nodemailer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
