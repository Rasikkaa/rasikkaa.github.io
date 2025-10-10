import SocialMedia from "../socialMedia/SocialMedia";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#introduction" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-gray-800">
      <div className="content py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Rasi P</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Software Engineer passionate about creating innovative solutions with modern technologies. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <SocialMedia />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-picto-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Calicut, Kerala</p>
              <a 
                href="mailto:razirasi10@gmail.com" 
                className="block hover:text-picto-primary transition-colors duration-300"
              >
                razirasi10@gmail.com
              </a>
              <a 
                href="tel:+918590385375" 
                className="block hover:text-picto-primary transition-colors duration-300"
              >
                +91 8590385375
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Rasi P. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;