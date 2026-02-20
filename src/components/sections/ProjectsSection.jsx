import SectionHeading from "../common/SectionHeading";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Building Real Solutions"
          title="Portfolio Case Studies"
          subtitle="A selection of projects showcasing full-stack development, cybersecurity focus, and backend depth."
        />

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card glass-card" data-reveal>
              <div className="project-header">
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>

              <div className="project-block">
                <h4>Problem Statement</h4>
                <p>{project.problem}</p>
              </div>

              <div className="project-block">
                <h4>Architecture</h4>
                <ul>
                  {project.architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-badges">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <p className="project-metric">{project.metrics}</p>

              <div className="project-links">
                <a className="button button-outline" href={project.repoUrl} target="_blank" rel="noreferrer">
                  View Project
                </a>
                {project.demoUrl ? (
                  <a className="button button-ghost" href={project.demoUrl} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
