const SiteFooter = ({ profile, links }) => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{profile.name}</h3>
          <p>
            Software Engineer passionate about creating innovative solutions with modern technologies. Let's build
            something amazing together.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p>{profile.address}</p>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
