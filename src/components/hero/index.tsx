import "./index.css";
import PrimaryBtn from "../ui/primaryBtn";
import DotBox from "../ui/dotbox/dotbox";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact", { replace: false });
  };

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
          M8DrivenDev is a{" "}
          <span className="text-primary">
            Full-Stack Web developer, Software Engineer,
          </span>{" "}
          and <span className="text-primary"> content creator</span>
        </h1>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <PrimaryBtn onClick={handleContactClick}>Contact me !!</PrimaryBtn>
      </div>
      <div className="hero-photo">
        <div className="photo-logo">
          <img src="./logo-outline-pink.svg" alt="logo" />
        </div>
        <img src="./img-0.png" alt="me.png" />
        <div className="photo-dots">
          <DotBox width={100} height={100} dotSpacing={15} />
        </div>
        <div className="photo-status">
          <div className="primary-color-box"></div>
          <p className="text-gray">
            {" "}
            Currently working on <span className="text-white">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
