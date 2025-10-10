import Introduction from "../components/introduction/Introduction";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Services from "../components/services/Services";
import Stats from "../components/stats/Stats";
import Experience from "../components/experience/Experience";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import useScrollReveal from "../hooks/useScrollReveal";
import "../../index.css";

const Home = () => {
  useScrollReveal();
  
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
        </div>
      </div>
      <About />
      <Skills />
      <Services />
      <Stats />
      <Experience />
      <div className="dark-section">
        <Portfolio />
      </div>

      <Contact />
    </div>
  );
};

export default Home;
