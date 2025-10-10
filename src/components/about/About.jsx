const About = () => {
  return (
    <div className="dark-section py-12 md:py-20" id="about">
      <div className="content px-4 md:px-0">
        <div className="text-center mb-12 md:mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Passionate About <span className="gradient-text">Software Development</span> & <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
            Dedicated to building secure, scalable applications with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 md:space-y-6 scroll-reveal">
            <div className="modern-card p-4 md:p-6 rounded-2xl hover:scale-105 transition-all duration-300 glow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-picto-primary">My Journey</h3>
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                Results-driven Software Engineer with expertise in full-stack development and Odoo module customization. 
                Experience in Python, Java, JavaScript, React.js, Node.js, MySQL, and MongoDB.
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                Completed a 2-month Cybersecurity Internship at EdiGlobe, applying secure coding practices and 
                conducting vulnerability assessments.
              </p>
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-4 scroll-reveal">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="text-center p-3 md:p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-xl md:text-2xl font-bold text-picto-primary">2025</div>
                <div className="text-xs md:text-sm text-gray-400">Graduate</div>
              </div>
              <div className="text-center p-3 md:p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-xl md:text-2xl font-bold text-picto-primary">10+</div>
                <div className="text-xs md:text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-3 md:p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-xl md:text-2xl font-bold text-picto-primary">3+</div>
                <div className="text-xs md:text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-3 md:p-4 modern-card rounded-xl hover:glow transition-all duration-300 hover:scale-105 animate-border">
                <div className="text-xl md:text-2xl font-bold text-picto-primary">100%</div>
                <div className="text-xs md:text-sm text-gray-400">Learning Spirit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;