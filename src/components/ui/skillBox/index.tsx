import "./index.css";

const SkillBox = ({ heading, skills }: { heading: string; skills: string }) => {
  return (
    <div className="skill-box">
      <h3>{heading}</h3>
      <p>{skills}</p>
    </div>
  );
};

export default SkillBox;
