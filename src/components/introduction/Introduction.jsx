import person from "../../assets/images/person.png";
import Particles from "../common/particles/Particles";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="min-h-screen flex items-center py-20 relative z-10" id="introduction">
      <Particles />
      <div className="content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fadeInLeft">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Rasi P
            </h1>
            <div className="text-xl lg:text-2xl text-picto-primary font-semibold mb-6 animate-fadeInUp typing-animation" style={{animationDelay: '0.2s'}}>
              Software Engineer — Full-Stack Developer
            </div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              I'm a <span className="text-picto-primary">Software Engineer</span> and{" "}
              <span className="text-picto-primary">Full-Stack Developer</span> based in
              Calicut, Kerala. I specialize in building scalable web applications with expertise in MERN stack, cybersecurity, and Odoo customization.
            </p>
            <div className="flex gap-4 mb-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <a
                href="mailto:razirasi10@gmail.com"
                className="btn btn-primary px-6 py-3 text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#portfolio"
                className="btn bg-transparent border-2 border-picto-primary text-picto-primary hover:bg-picto-primary hover:text-white px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
              >
                View Work
              </a>
            </div>
            <div className="flex gap-8 text-sm text-gray-400 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2025</div>
                <div>Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div>Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div>Projects</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-picto-primary/30 to-purple-600/30 rounded-full blur-3xl transform scale-110"></div>
              
              {/* Main image container */}
              <div className="relative z-10">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={person}
                      alt="Rasi P - Software Engineer"
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-picto-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-6 w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                
                {/* Status badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                  🟢 Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;