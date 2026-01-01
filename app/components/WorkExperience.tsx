import React from 'react';
import { FaFire } from 'react-icons/fa';
import { useLanguage } from '~/contexts/LanguageContext';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const WorkExperience: React.FC = () => {
  const { t } = useLanguage();

  const experiences: Experience[] = [
    {
      company: 'DaiOff',
      position: t.workExperience.experiences.daioff.position,
      duration: t.workExperience.experiences.daioff.duration,
      description: t.workExperience.experiences.daioff.description,
    },
    {
      company: 'Team Gravitad',
      position: t.workExperience.experiences.gravitad.position,
      duration: t.workExperience.experiences.gravitad.duration,
      description: t.workExperience.experiences.gravitad.description,
    },
    {
      company: 'Packar',
      position: t.workExperience.experiences.packar.position,
      duration: t.workExperience.experiences.packar.duration,
      description: t.workExperience.experiences.packar.description,
    },
  ];

  return (
    <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-white">
        <span className="text-orange-500">{t.workExperience.title.substring(0, 4)}</span>{t.workExperience.title.substring(4)}
      </h1>
      <div className="border-t-2 border-orange-500 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12"></div>
      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="p-4 sm:p-5 md:p-6 lg:p-8 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-lg transform transition duration-500 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-2">
              <FaFire className="text-orange-500 mr-2 mb-2 sm:mb-0 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">{experience.position}</h2>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500 mb-1 sm:mb-2">{experience.company}</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{experience.duration}</p>
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">{experience.description}</p>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-orange-500 max-w-4xl mx-auto mt-8 sm:mt-10 md:mt-12"></div>
    </div>
  );
};

export default WorkExperience;
