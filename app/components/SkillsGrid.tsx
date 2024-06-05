import React from 'react';

const skills = [
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', experience: '1 Year Experience' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', experience: '1 Year Experience' },
  { name: 'Javascript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', experience: '1 Year Experience' },
  { name: 'Tailwind', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', experience: '1 Year Experience' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', experience: '1 Year Experience' },
  { name: 'Typescript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', experience: '1 Year Experience' },
];

const SkillsGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-white"><span className="text-orange-500">Tech</span>nologies</h1>
      <div className="border-t-2 border-orange-500 max-w-6xl mx-auto mb-12"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-20 h-20 mb-4"/>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">{skill.name}</h2>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-orange-500 max-w-6xl mx-auto mt-12"></div>
    </div>
  );
};

export default SkillsGrid;
