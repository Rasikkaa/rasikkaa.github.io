const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="section-heading-wrap" data-reveal>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeading;
