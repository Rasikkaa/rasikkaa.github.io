const Stats = () => {
  const stats = [
    {
      number: "2025",
      suffix: "",
      label: "Graduate",
      icon: "🎓"
    },
    {
      number: "10",
      suffix: "+",
      label: "Technologies",
      icon: "⚡"
    },
    {
      number: "3",
      suffix: "+",
      label: "Projects",
      icon: "💼"
    },
    {
      number: "100",
      suffix: "%",
      label: "Dedication",
      icon: "🚀"
    }
  ];

  return (
    <div className="dark-section py-20">
      <div className="content">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-reveal">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center modern-card p-6 rounded-2xl hover:glow transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-picto-primary mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;