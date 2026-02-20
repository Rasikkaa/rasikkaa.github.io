import SectionHeading from "../common/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinux,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBug,
  faBrain,
  faCode,
  faCodeBranch,
  faCodeCompare,
  faDatabase,
  faKey,
  faLayerGroup,
  faLock,
  faNetworkWired,
  faPaperPlane,
  faPlug,
  faRobot,
  faServer,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const skillIcons = {
  "React.js": faReact,
  JavaScript: faJs,
  HTML5: faHtml5,
  CSS3: faCss3Alt,
  Bootstrap: faBootstrap,
  Django: faServer,
  "Django REST Framework": faLayerGroup,
  "Node.js": faNodeJs,
  Python: faPython,
  Java: faJava,
  C: faCode,
  PHP: faPhp,
  "Express.js": faServer,
  Odoo: faCodeBranch,
  MongoDB: faDatabase,
  MySQL: faDatabase,
  PostgreSQL: faDatabase,
  Git: faGitAlt,
  GitHub: faGithub,
  Linux: faLinux,
  Docker: faDocker,
  Postman: faPaperPlane,
  "Generative AI": faBrain,
  ChatGPT: faRobot,
  OWASP: faShieldHalved,
  Metasploit: faBug,
  "JWT Authentication": faKey,
  "Role-Based Access Control": faShieldHalved,
  "RESTful APIs": faNetworkWired,
  "API Integration": faPlug,
  "Web Security": faLock,
};

function resolveSkillIcon(skill) {
  return skillIcons[skill] || faCodeCompare;
}

const SkillsSection = ({ matrix }) => {
  return (
    <section id="skills" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="My Skills"
          title="Core Technologies I Work With"
          subtitle="Focused stack across frontend, backend, database, and engineering tools."
        />

        <div className="skills-gallery">
          {matrix.map((group) => (
            <article key={group.category} className="glass-card skill-category-card" data-reveal>
              <h3>{group.category}</h3>
              <div className="skills-icon-grid">
                {group.items.map((item) => (
                  <article key={item} className="skill-icon-item">
                    <span className="skill-icon" aria-hidden="true">
                      <FontAwesomeIcon icon={resolveSkillIcon(item)} />
                    </span>
                    <span className="skill-label">{item}</span>
                  </article>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
