import { useEffect, useMemo, useState } from "react";
import profileImage from "../../assets/images/person.png";

const HeroSection = ({ profile, heroStats, parallaxOffset }) => {
  const rotatingLines = useMemo(() => {
    if (Array.isArray(profile.heroLoopLines) && profile.heroLoopLines.length > 0) {
      return profile.heroLoopLines;
    }
    return [profile.heroStatement].filter(Boolean);
  }, [profile.heroLoopLines, profile.heroStatement]);

  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    setLineIndex(0);
  }, [rotatingLines]);

  useEffect(() => {
    if (rotatingLines.length <= 1) {
      return undefined;
    }

    const cycleMs = 3800;
    const interval = window.setInterval(() => {
      setLineIndex((current) => (current + 1) % rotatingLines.length);
    }, cycleMs);

    return () => {
      window.clearInterval(interval);
    };
  }, [rotatingLines]);

  const activeHeroLine = rotatingLines[lineIndex] || profile.heroStatement;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-backdrop">
        <div
          className="hero-orb hero-orb-one"
          style={{ transform: `translate3d(0, ${Math.min(parallaxOffset * 0.12, 80)}px, 0)` }}
        />
        <div
          className="hero-orb hero-orb-two"
          style={{ transform: `translate3d(0, ${Math.min(parallaxOffset * 0.18, 120)}px, 0)` }}
        />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-positioning">{profile.positioning}</p>
          <p key={lineIndex} className="typing-line">
            {activeHeroLine}
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-cta">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-outline" href={profile.resumePath} download>
              Download Resume
            </a>
            <a className="button button-ghost" href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="hero-mini-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-card hero-mini-stat">
                <p>{stat.label}</p>
                <h3>{stat.value}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-image-frame">
            <img src={profileImage} alt="Rasi P portrait" className="hero-portrait" />
          </div>
          <div className="hero-badge-row">
            <span>Python</span>
            <span>Django</span>
            <span>MERN</span>
            <span>JWT</span>
            <span>Cybersecurity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
