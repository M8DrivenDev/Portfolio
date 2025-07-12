import Divider from "../../ui/divider";
import DotBox from "../../ui/dotbox/dotbox";
import { HollowRect } from "../../ui/hollowRect";
import ProjectCard from "../../ui/projectCard";
import "./index.css";
import { FaArrowRight } from "react-icons/fa6";

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <div className="projects-divider">
        <Divider dividerHeading="Projects" />
        <a href="/projects">
          View all <FaArrowRight />
        </a>
      </div>
      <div className="projects-container">
        <div className="projects-dots">
          <DotBox width={100} height={100} />
        </div>
        <ProjectCard
          imgSrc="./vox-mail.png"
          heading="Vox Mail"
          desc="AI Brand Manager that negotiate and make deals on your behalf"
          projectTech="Nextjs React Tailwindcss websockets next-auth"
          viewMore={false}
        />
        <ProjectCard
          imgSrc="./pipeline-header.png"
          heading="Pipeline"
          desc="Whatsapp clone web app"
          projectTech="React Tailwindcss websockets expressjs nodejs"
          viewMore={true}
          redirectUrl="https://github.com/M8DrivenDev/Pipeline"
        />
        <ProjectCard
          imgSrc="./shell-header.png"
          heading="Gates Of Shell"
          desc="This is a simple shell program that allows users to excute commands"
          projectTech="C Programming language"
          viewMore={true}
          redirectUrl="https://github.com/M8DrivenDev/Gates-Of-Shell"
        />
        <div className="projects-rect">
          <HollowRect width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
