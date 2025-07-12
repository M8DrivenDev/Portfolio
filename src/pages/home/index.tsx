import Hero from "../../components/hero";
import Navbar from "../../components/navbar";
import Projects from "../../components/projects";
import Quote from "../../components/quote";
import SideLinks from "../../components/sideLinks";
import SkillsSection from "../../components/skills";
import AboutMe from "../../components/aboutMe";
import "./index.css";

const Home = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
        rel="stylesheet"
      />
      <div className="header">
        <SideLinks />
        <Navbar />
      </div>
      <div className="container">
        <Hero />
        <Quote />
        <Projects />
        <SkillsSection />
        <AboutMe />
      </div>
    </>
  );
};

export default Home;
