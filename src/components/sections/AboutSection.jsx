import SectionHeading from "../common/SectionHeading";

const AboutSection = ({ highlights, skillBars }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="My Journey"
          title="Passionate About Software Development & Automation"
          subtitle="Dedicated to building secure, scalable applications with modern technologies and best practices."
        />

        <div className="about-grid">
          <div className="glass-card about-copy" data-reveal>
            {highlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="glass-card about-skills" data-reveal>
            {skillBars.map((skill) => (
              <div key={skill.label} className="skill-row">
                <div className="skill-row-header">
                  <span>{skill.label}</span>
                  <strong>{skill.value}%</strong>
                </div>
                <div className="progress-track">
                  <span className="progress-fill" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
