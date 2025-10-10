const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Express.js", level: 85 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Linux", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  return (
    <div className="dark-section py-20" id="skills">
      <div className="content">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills with proficiency levels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 scroll-reveal">
          {skillCategories.map((category, index) => (
            <div key={index} className="modern-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-picto-primary mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-picto-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-picto-primary to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;