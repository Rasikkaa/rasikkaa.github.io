import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="modern-card p-6 rounded-2xl hover:glow hover:scale-105 transition-all duration-300 group">
      <div className="mb-4">
        <div className="inline-block px-3 py-1 bg-picto-primary/20 text-picto-primary rounded-full text-sm font-medium mb-3">
          {data?.category}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-picto-primary transition-colors">
          {data?.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {data?.description}
        </p>
        <a
          href={data?.link}
          className="inline-flex items-center text-picto-primary hover:text-white transition-all duration-300 font-medium"
        >
          View Project
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
