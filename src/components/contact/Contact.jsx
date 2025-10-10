import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Contact = () => {
  return (
    <div className="dark-section py-12 md:py-20" id="contact">
      <div className="content">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start px-4 md:px-0">
          {/* Left Side - Contact Info */}
          <div className="scroll-reveal space-y-4 md:space-y-6">
            <div className="modern-card p-4 md:p-6 rounded-2xl hover:glow transition-all duration-300">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-picto-primary/20 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} className="text-lg md:text-xl text-picto-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Address</h4>
                  <p className="text-gray-400 text-sm md:text-base">Calicut, Kerala - 673019</p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-4 md:p-6 rounded-2xl hover:glow transition-all duration-300">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-picto-primary/20 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-lg md:text-xl text-picto-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Email</h4>
                  <a href="mailto:razirasi10@gmail.com" className="text-gray-400 hover:text-picto-primary transition-colors text-sm md:text-base break-all">
                    razirasi10@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-4 md:p-6 rounded-2xl hover:glow transition-all duration-300">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-picto-primary/20 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} className="text-lg md:text-xl text-picto-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm md:text-base">Phone</h4>
                  <a href="tel:+918590385375" className="text-gray-400 hover:text-picto-primary transition-colors text-sm md:text-base">
                    +91 8590385375
                  </a>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-4 md:p-6 rounded-2xl hover:glow transition-all duration-300">
              <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Follow Me</h4>
              <SocialMedia />
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="scroll-reveal">
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 focus:border-picto-primary outline-none py-3 text-white placeholder-gray-400 transition-colors text-sm md:text-base"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 focus:border-picto-primary outline-none py-3 text-white placeholder-gray-400 transition-colors text-sm md:text-base"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 focus:border-picto-primary outline-none py-3 text-white placeholder-gray-400 transition-colors text-sm md:text-base"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 focus:border-picto-primary outline-none py-3 text-white placeholder-gray-400 transition-colors text-sm md:text-base"
                />
              </div>
              
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-0 border-b-2 border-gray-600 focus:border-picto-primary outline-none py-3 text-white placeholder-gray-400 transition-colors text-sm md:text-base"
                required
              />
              
              <textarea
                placeholder="Write your message here..."
                rows="4"
                className="w-full bg-transparent border-0 border-b-2 border-gray-600 focus:border-picto-primary outline-none py-3 text-white placeholder-gray-400 transition-colors resize-none text-sm md:text-base"
                required
              ></textarea>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto btn btn-primary px-6 md:px-8 py-3 text-white font-semibold hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;