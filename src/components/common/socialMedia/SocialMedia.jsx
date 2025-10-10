import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://linkedin.com/in/rasi-p-b7aa641a9" },
  { icon: faGithub, link: "https://github.com/Rasikkaa" },
];

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      {socialIcons.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-800 hover:bg-picto-primary text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          key={index}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-lg"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
