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

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      position > 50 ? "bg-dark-bg/95 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="content">
        <div className="flex justify-between items-center py-4">
          <Link
            to="introduction"
            smooth={true}
            duration={800}
            className="text-2xl font-bold text-white cursor-pointer hover:text-picto-primary transition-colors"
          >
            Rasi P
          </Link>
          
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

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="btn btn-primary px-6 py-2 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;