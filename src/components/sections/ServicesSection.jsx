import SectionHeading from "../common/SectionHeading";

const ServicesSection = ({ items }) => {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="My Services"
          title="What I Can Do for You"
          subtitle="End-to-end engineering support from development and security to deployment and optimization."
        />

        <div className="services-grid">
          {items.map((item) => (
            <article key={item.title} className="glass-card service-card" data-reveal>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
