import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "about" },
  { id: 3, name: "Skills", url: "skills" },
  { id: 4, name: "Services", url: "services" },
  { id: 5, name: "Portfolio", url: "portfolio" },
  { id: 6, name: "Contact", url: "contact" },
];

const NavBar = () => {
  const [position, setPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      position > 50 ? "bg-dark-bg/95 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="content px-4 md:px-0">
        <div className="flex justify-between items-center py-4">
          <Link
            to="introduction"
            smooth={true}
            duration={800}
            className="text-xl md:text-2xl font-bold text-white cursor-pointer hover:text-picto-primary transition-colors"
            onClick={closeMenu}
          >
            Rasi P
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                smooth={true}
                duration={800}
                spy={true}
                offset={-80}
                className="text-gray-300 hover:text-picto-primary cursor-pointer transition-colors font-medium"
                activeClass="text-picto-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="hidden md:block btn btn-primary px-6 py-2 cursor-pointer"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-bg/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-80}
                  className="block px-3 py-2 text-gray-300 hover:text-picto-primary cursor-pointer transition-colors font-medium"
                  activeClass="text-picto-primary"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="block mt-4 btn btn-primary px-6 py-2 cursor-pointer text-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;