import SectionHeading from "../common/SectionHeading";

const TimelineSection = ({ items }) => {
  return (
    <section id="timeline" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Progression from Education to Product Delivery"
          subtitle="Milestones mapped from diploma and B.Tech through internship and security-led projects."
        />

        <div className="timeline-wrap">
          {items.map((item) => (
            <article key={`${item.year}-${item.title}`} className="timeline-item glass-card" data-reveal>
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
