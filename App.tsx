import React, { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 50; i++) {
        newDots.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <svg 
      className="absolute inset-0 w-full h-full z-0 opacity-20" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100"
    >
      {dots.map((dot, index) => (
        <circle
          key={index}
          cx={dot.x}
          cy={dot.y}
          r={dot.size}
          fill="#2ecc71"
          className="animate-move"
          style={{
            animationDuration: `${10 / dot.speed}s`,
            animationDelay: `${Math.random() * 2}s`,
            animationIterationCount: 'infinite'
          }}
        />
      ))}
    </svg>
  );
};

const SkillCard = ({ name, percentage, icon }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">
      <div className="flex items-center mb-2">
        <span className="mr-2 text-green-400">{icon}</span>
        <h3 className="text-white font-semibold">{name}</h3>
      </div>
      <div className="bg-gray-700 rounded-full h-2 mt-2">
        <div 
          className="bg-green-500 rounded-full h-2" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-400 mt-1">{percentage}%</p>
    </div>
  );
};

const ProjectCard = ({ title, description, technologies, githubLink }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="bg-green-600 text-white px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        View on GitHub
      </a>
    </div>
  );
};

const PortfolioWebsite = () => {
  const [typedText, setTypedText] = useState('');
  const terminalText = "[adithiyaa@arch ~]$ I use Arch, btw.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < terminalText.length) {
        setTypedText(prev => prev + terminalText[i]);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const skills = [
    { name: 'Linux Administration', percentage: 90, icon: '🐧' },
    { name: 'Python Development', percentage: 85, icon: '🐍' },
    { name: 'Web Development', percentage: 75, icon: '🌐' },
    { name: 'AI & Machine Learning', percentage: 80, icon: '🤖' },
    { name: 'Cybersecurity', percentage: 65, icon: '🛡️' },
    { name: 'Bash Scripting', percentage: 75, icon: '💻' }
  ];

  const projects = [
    {
      title: 'AI-Powered Software Testing System',
      description: 'Developed an advanced AI-driven testing framework that automates test case generation, execution, and bug detection with machine learning algorithms.',
      technologies: ['Python', 'AI', 'Machine Learning', 'Automation'],
      githubLink: 'https://github.com/harsha-d-kyousuke'
    },
    {
      title: '8 Billion Parameter AI Language Model',
      description: 'Created a large-scale natural language processing model with 8 billion parameters, capable of advanced text generation and understanding.',
      technologies: ['Deep Learning', 'NLP', 'TensorFlow', 'PyTorch'],
      githubLink: 'https://github.com/harsha-d-kyousuke'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Terminal Header */}
      <div className="relative z-10 bg-gray-900 p-4 border-b border-gray-700">
        <span className="text-green-400">root@archuser</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~/portfolio</span>
        <span className="text-white">$ </span>
        <span className="text-green-300">{typedText}</span>
        <span className="animate-blink">_</span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Profile Header */}
        <header className="text-center mb-12">
          <div className="flex flex-col items-center">
            <img 
              src="/api/placeholder/200/200" 
              alt="Adithiyaa JP" 
              className="w-48 h-48 rounded-full border-4 border-green-600 mb-4 hover:rotate-6 transition-transform"
            />
            <h1 className="text-4xl font-bold text-white mb-2">Adithiyaa JP</h1>
            <p className="text-xl text-green-400 mb-4">
              Software Developer | Linux Enthusiast | AI Innovator
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/harsha-d-kyousuke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/adithiyaa-jp-a51953303" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        {/* About Me */}
        <section className="bg-gray-900 rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
            About Me
          </h2>
          <div className="text-center text-gray-300">
            <p className="mb-4">
              An aspiring software developer with a passion for Linux, open-source technologies, 
              and cutting-edge AI solutions. I thrive on exploring new technologies, 
              solving complex problems, and pushing the boundaries of what's possible 
              with code and innovation.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg inline-block">
              <code className="text-green-400">
                $ whoami
                <br />
                adithiyaa: Linux enthusiast, AI developer, 
                <br />
                perpetual learner of technology
              </code>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gray-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Contact Me
          </h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 bg-gray-800 text-white rounded"
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 bg-gray-800 text-white rounded"
              />
            </div>
            <div className="mb-4">
              <textarea 
                placeholder="Message" 
                className="w-full p-3 bg-gray-800 text-white rounded h-40"
              ></textarea>
            </div>
            <button 
              className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 p-6 text-center mt-12">
        <p className="text-gray-500">
          © 2025 Adithiyaa JP | Proudly powered by Arch Linux
        </p>
      </footer>

      {/* Custom Tailwind Animations */}
      <style jsx>{`
        @keyframes move {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
          100% { transform: translate(-10px, -10px); }
        }
        
        .animate-move {
          animation: move linear infinite;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioWebsite;
