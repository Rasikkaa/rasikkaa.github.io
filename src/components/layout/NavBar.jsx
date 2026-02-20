const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = ({ onToggleTheme, theme }) => {
  return (
    <header className="nav-shell">
      <div className="container nav-inner">
        <a className="brand" href="#hero" aria-label="Go to top">
          <span>Rasi P</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
