import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faShieldAlt, faCogs, faDatabase, faCloud, faMobile } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      icon: faCode,
      title: "Full-Stack Development",
      description: "Building complete web applications using MERN stack with modern UI/UX design principles."
    },
    {
      icon: faShieldAlt,
      title: "Cybersecurity Solutions",
      description: "Implementing secure coding practices, vulnerability assessments, and OWASP compliance."
    },
    {
      icon: faCogs,
      title: "Odoo Customization",
      description: "Custom Odoo modules development using Python models, XML views, and dashboard UI."
    },
    {
      icon: faDatabase,
      title: "Database Design",
      description: "Designing and optimizing databases with MongoDB, MySQL, and PostgreSQL."
    },
    {
      icon: faCloud,
      title: "Cloud Integration",
      description: "Deploying applications on cloud platforms with proper monitoring and scaling."
    },
    {
      icon: faMobile,
      title: "Responsive Design",
      description: "Creating mobile-first, responsive web applications that work across all devices."
    }
  ];

  return (
    <div className="dark-section py-20" id="services">
      <div className="content">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What I can do for you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="modern-card p-6 rounded-2xl hover:glow hover:scale-105 transition-all duration-300 text-center group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-picto-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-picto-primary/30 transition-colors">
                <FontAwesomeIcon icon={service.icon} className="text-2xl text-picto-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-picto-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;