import { FaArrowRight } from "react-icons/fa6";
import PrimaryBtn from "../primaryBtn";
import "./index.css";

const ProjectCard = ({
  imgSrc,
  projectTech,
  desc,
  heading,
  redirectUrl,
  viewMore,
}: {
  imgSrc: string;
  projectTech: string;
  heading: string;
  desc: string;
  redirectUrl?: string;
  viewMore: boolean;
}) => {
  return (
    <div className="project-card-container">
      <img className="project-photo" src={imgSrc} alt="" />
      <p className="project-tech">{projectTech}</p>
      <div className="project-details">
        <h3 className="project-heading">{heading}</h3>
        <p className="project-description">{desc}</p>
        {viewMore && redirectUrl && (
          <PrimaryBtn
            onClick={() =>
              window.open(redirectUrl, "_blank", "noopener, noreferrer")
            }
          >
            View More <FaArrowRight />
          </PrimaryBtn>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
