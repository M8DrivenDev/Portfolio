import Footer from "../../components/global/footer";
import HeadRoute from "../../components/global/headRoute";
import Navbar from "../../components/global/navbar";
import SideLinks from "../../components/global/sideLinks";
import SkillsSection from "../../components/home/skillsSection";
import DotBox from "../../components/ui/dotbox/dotbox";

const AboutMePage = () => {
  return (
    <div>
      <div className="header">
        <SideLinks />
        <Navbar />
      </div>
      <HeadRoute heading="About-Me" subHeading="Who Am I?" />
      <div className="about-section">
        <div className="about-container">
          <div className="about-text-container">
            <h4 className="text-primary">Hello, I’m M8DrivenDev!</h4>
            <p className="text-gray">
              I'm a self-taught full-stack developer and software engineer with
              a passion for turning ideas into real, functional, and visually
              striking digital experiences. I specialize in building fast,
              responsive, and scalable websites and web applications from the
              ground up—whether it’s a sleek portfolio, a fully-featured product
              dashboard, or a dynamic full-stack app tailored to your unique
              goals.
            </p>
            <p className="text-gray">
              What sets me apart is a combination of technical depth and
              creative insight. I don’t just write code—I craft experiences.
              Every pixel, every interaction, and every line of code serves a
              purpose: to make your brand stand out and perform at its best.
              From frontend finesse to backend logic, I ensure performance,
              accessibility, and maintainability are always part of the build.
            </p>
            <p className="text-gray">
              Over the past few years, I’ve collaborated with businesses and
              individuals to bring their digital visions to life. My clients
              appreciate my clarity, communication, and attention to detail. I
              make it a priority to understand your vision deeply and deliver a
              product that not only meets but exceeds expectations.
            </p>
            <p className="text-gray">
              Beyond client work, I’m also a content creator, sharing my journey
              through the tech world—from new frameworks to hard-won lessons in
              building products and systems that actually work in the wild. I
              believe in building in public, staying curious, and continuously
              leveling up.
            </p>
            <p className="text-gray">
              If you're looking for someone who can blend solid engineering with
              a strong sense of design and usability—someone who will treat your
              project like it’s their own—you’re in the right place.
            </p>
            <p className="text-gray">
              Let’s build something exceptional together.
            </p>
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
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default AboutMePage;
