import Footer from "../../components/global/footer";
import Navbar from "../../components/global/navbar";
import SideLinks from "../../components/global/sideLinks";
import AboutMeSection from "../../components/home/aboutSection";
import ContactSection from "../../components/home/contactSection";
import HeroSection from "../../components/home/heroSection";
import ProjectsSection from "../../components/home/projectsSection";
import QuoteSection from "../../components/home/quoteSection";
import SkillsSection from "../../components/home/skillsSection";
import "./index.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <SideLinks />
        <Navbar />
      </div>
      <HeroSection />
      <QuoteSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
