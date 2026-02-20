import NavBar from "../components/layout/NavBar";
import SiteFooter from "../components/layout/SiteFooter";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SecuritySection from "../components/sections/SecuritySection";
import ServicesSection from "../components/sections/ServicesSection";
import SkillsSection from "../components/sections/SkillsSection";
import TimelineSection from "../components/sections/TimelineSection";
import { useParallax } from "../hooks/useParallax";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useTheme } from "../hooks/useTheme";
import {
  aboutSkillBars,
  education,
  experience,
  featuredProjects,
  heroStats,
  professionalHighlights,
  profile,
  quickLinks,
  securityFocus,
  services,
  skillsMatrix,
  timeline,
} from "../lib/profile";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const parallaxOffset = useParallax();

  useRevealOnScroll();

  return (
    <div className={`portfolio-shell ${theme === "light" ? "is-light" : ""}`}>
      <NavBar onToggleTheme={toggleTheme} theme={theme} />

      <main>
        <HeroSection profile={profile} heroStats={heroStats} parallaxOffset={parallaxOffset} />
        <AboutSection highlights={professionalHighlights} skillBars={aboutSkillBars} />
        <SkillsSection matrix={skillsMatrix} />
        <ServicesSection items={services} />
        <ExperienceSection experienceItems={experience} educationItems={education} />
        <ProjectsSection projects={featuredProjects} />
        <SecuritySection items={securityFocus} />
        <TimelineSection items={timeline} />
        <ContactSection profile={profile} />
      </main>

      <SiteFooter profile={profile} links={quickLinks} />
    </div>
  );
};

export default App;
