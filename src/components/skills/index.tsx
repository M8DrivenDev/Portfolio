import Divider from "../ui/divider";
import SkillBox from "../ui/skillBox";
import "./index.css";

const SkillsSection = () => {
  return (
    <div>
      <div className="divider-container">
        <Divider dividerHeading="Skills" />
      </div>
      <div className="skills-container">
        <div className="skills-shapes"></div>
        <div className="skill-boxes">
          <SkillBox
            heading="Languages"
            skills="TypeScript Lua Python JavaScript Clang C++"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
