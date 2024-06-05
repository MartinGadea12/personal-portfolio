import React from 'react';
import { FaFire } from 'react-icons/fa';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: 'Packar',
    position: 'Front-End Mobile Developer',
    duration: 'February 2023 - January 2024',
    description: 'I develop mobile applications using React Native, Expo GO.'
  },
  {
    company: 'Team Gravitad',
    position: 'Front-End Developer',
    duration: 'April 2024 - Present',
    description: 'Working as a freelancer developing front-end applications.'
  }
];

const WorkExperience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6 text-white"><span className="text-orange-500">Work</span> Experience</h1>
      <div className="border-t-2 border-orange-500 max-w-6xl mx-auto mb-12"></div>
      {experiences.map((experience, index) => (
        <div 
          key={index} 
          className="mb-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl"
        >
          <div className="flex items-center mb-2">
            <FaFire className="text-orange-500 mr-2" />
            <h2 className="text-2xl font-semibold text-white">{experience.position}</h2>
          </div>
          <h3 className="text-xl font-bold text-orange-500">{experience.company}</h3>
          <p className="text-gray-400">{experience.duration}</p>
          <p className="mt-2 text-white">{experience.description}</p>
        </div>
      ))}
      <div className="border-t-2 border-orange-500 max-w-6xl mx-auto mt-12"></div>
    </div>
  );
};

export default WorkExperience;
