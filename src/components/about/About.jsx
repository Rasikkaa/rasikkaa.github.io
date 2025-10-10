const About = () => {
  return (
    <div className="dark-section py-20" id="about">
      <div className="content">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4">
            Passionate About <span className="gradient-text">Software Development</span> & <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Dedicated to building secure, scalable applications with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 scroll-reveal">
            <div className="modern-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow">
              <h3 className="text-xl font-semibold mb-2 text-picto-primary">My Journey</h3>
              <p className="text-gray-300 mb-4">
                Results-driven Software Engineer with expertise in full-stack development and Odoo module customization. 
                Experience in Python, Java, JavaScript, React.js, Node.js, MySQL, and MongoDB.
              </p>
              <p className="text-gray-300">
                Completed a 2-month Cybersecurity Internship at EdiGlobe, applying secure coding practices and 
                conducting vulnerability assessments.
              </p>
            </div>
          </div>
          
          <div className="space-y-4 scroll-reveal">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-2xl font-bold text-picto-primary">2025</div>
                <div className="text-sm text-gray-400">Graduate</div>
              </div>
              <div className="text-center p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-2xl font-bold text-picto-primary">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-2xl font-bold text-picto-primary">3+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-2xl font-bold text-picto-primary">100%</div>
                <div className="text-sm text-gray-400">Learning Spirit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;