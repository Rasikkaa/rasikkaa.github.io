import SectionHeading from "../common/SectionHeading";

const SecuritySection = ({ items }) => {
  return (
    <section id="security" className="section section-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Security-First Backend Engineering"
          title="Backend Systems Built to Defend by Design"
          subtitle="Security controls are treated as architecture fundamentals, not post-release patches."
        />

        <div className="security-grid">
          {items.map((item) => (
            <article key={item.title} className="glass-card security-card" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
