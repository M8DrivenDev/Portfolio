import Divider from "../../ui/divider";
import PrimaryBtn from "../../ui/primaryBtn";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import DotBox from "../../ui/dotbox/dotbox";
import { HollowRect } from "../../ui/hollowRect";
import "./index.css";

const AboutMeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="about-section">
      <div className="skills-divider">
        <Divider dividerHeading="About-Me" />
      </div>
      <div className="about-container">
        <div className="about-square">
          <HollowRect height={200} width={200} />
        </div>
        <div className="about-text-container">
          <h4 className="text-primary">Hello, I’m M8DrivenDev!</h4>
          <p className="text-gray">
            I’m a self-taught full-stack developer and software engineer. I
            build modern, high-performance websites from scratch—transforming
            ideas into fast, responsive, and user-friendly web experiences.
            Whether it’s a clean portfolio, a slick product dashboard, or a
            full-stack web app, I make sure it works beautifully and speaks your
            brand.
          </p>
          <p className="text-gray">
            Over the past few years, I’ve helped clients create their online
            presence with clean code and smart design choices. I’m also a
            content creator, sharing my journey through tech, coding, and
            building in public—with a few keyboard smashes along the way. Always
            learning. Always building. Let’s turn your ideas into something real
            (and awesome).
          </p>
          <PrimaryBtn onClick={() => navigate("/about-me")}>
            Read More
            <FaArrowRight />
          </PrimaryBtn>
        </div>
        <div className="about-img-container">
          <img className="about-img" src="./img-1.png" alt="img" />
          <div className="photo-dots-1">
            <DotBox width={150} height={70} dotSpacing={15} />
          </div>
          <div className="photo-dots-2">
            <DotBox width={100} height={100} dotSpacing={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
