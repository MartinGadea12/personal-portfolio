// app/components/Navbar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '~/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-black text-white p-3 sm:p-4 flex justify-between items-center w-full">
      {/* Language Switcher */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            language === 'en'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
            language === 'es'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
          }`}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
      </div>

      {/* Social Links */}
      <div className="flex space-x-3 sm:space-x-4 md:space-x-5">
        <a
          href="https://github.com/MartinGadea12"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 active:scale-95 text-orange-500"
          aria-label={t.navbar.github}
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/martingadea12/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110 active:scale-95 text-orange-500"
          aria-label={t.navbar.linkedin}
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
