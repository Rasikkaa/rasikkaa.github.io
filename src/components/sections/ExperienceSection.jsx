import SectionHeading from "../common/SectionHeading";

const ExperienceSection = ({ experienceItems, educationItems }) => {
  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Professional and Academic Background"
          subtitle="Cybersecurity internship exposure plus structured engineering education milestones."
        />

        <div className="experience-grid">
          <div className="experience-column glass-card" data-reveal>
            <h3>Experience</h3>
            {experienceItems.map((item) => (
              <article key={`${item.title}-${item.organization}`} className="experience-item">
                <h4>{item.title}</h4>
                <p className="experience-org">{item.organization}</p>
                <p className="experience-duration">{item.duration}</p>
                <ul>
                  {item.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="experience-column glass-card" data-reveal>
            <h3>Education</h3>
            {educationItems.map((item) => (
              <article key={`${item.title}-${item.institution}`} className="education-item">
                <h4>{item.title}</h4>
                <p>{item.institution}</p>
                <p>{item.duration}</p>
                {item.cgpa ? <strong>CGPA: {item.cgpa}</strong> : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
