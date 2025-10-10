const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Trainee & Intern",
      company: "EdiGlobe (Remote)",
      period: "2 Months - Completed",
      achievements: [
        "Learned vulnerability assessment techniques and security best practices",
        "Worked on secure authentication workflows and gained hands-on experience",
        "Prepared technical documentation and reports",
        "Collaborated with remote team members and improved communication skills"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Government Engineering College, Wayanad",
      period: "2022 - 2025",
      cgpa: "7.24"
    },
    {
      degree: "Diploma in Computer Engineering", 
      institution: "Govt. Polytechnic College Meppadi",
      period: "2019 - 2022",
      cgpa: "8.43"
    },
    {
      degree: "Higher Secondary (Computer Science)",
      institution: "SPBHSS Ramanattukara, Kozhikode",
      period: "2018 - 2020",
      cgpa: "8.71"
    }
  ];

  return (
    <div className="dark-section py-20" id="experience">
      <div className="content">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="scroll-reveal">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-picto-primary mb-2">{exp.title}</h3>
                <p className="text-gray-300 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-picto-primary mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="scroll-reveal">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="experience-card hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-picto-primary mb-2">{edu.degree}</h3>
                <p className="text-gray-300 mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">{edu.period}</p>
                  <p className="text-sm text-picto-primary font-semibold">CGPA: {edu.cgpa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;