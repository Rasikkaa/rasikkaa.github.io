import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "MERN STACK",
    title: "Mediva - Smart Healthcare System",
    description:
      "Developed a healthcare platform with appointment booking, laboratory scheduling, and equipment rental, supporting 50+ daily users.",
    link: "https://github.com/Rasikkaa/Mediva",
  },
  {
    id: 2,
    image: card2,
    category: "CYBERSECURITY",
    title: "CredGuard - Secure Authentication System",
    description:
      "Implemented a secure login system preventing SQL injection, XSS, and session hijacking, achieving 100% OWASP compliance.",
    link: "https://github.com/Rasikkaa/CredGuard",
  },
  {
    id: 3,
    image: card3,
    category: "PYTHON FLASK",
    title: "Student Result Analyzer",
    description:
      "Created a web tool to analyze results for 200+ students, increasing reporting efficiency by 40% with Python Flask and MySQL.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div className="py-12 md:py-20" id="portfolio">
      <div className="content px-4 md:px-0">
        <div className="text-center mb-12 md:mb-16 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Building <span className="gradient-text">Real Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Here's a selection of my recent projects, showcasing expertise in full-stack development and cybersecurity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 scroll-reveal">
          {projectData.map((data, index) => (
            <div key={index} style={{animationDelay: `${index * 0.2}s`}}>
              <Projects data={data} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12 scroll-reveal">
          <a
            href="https://github.com/Rasikkaa"
            className="btn btn-primary py-2 md:py-3 px-4 md:px-6 text-sm md:text-base font-semibold hover:scale-105 transition-transform duration-300"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
