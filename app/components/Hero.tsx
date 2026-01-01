import React from "react";
import { AuroraBackground } from "~/components/aurora-background";
import { useLanguage } from "~/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <AuroraBackground className="text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="flex-1 flex flex-col justify-center md:items-start text-center md:text-left w-full">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              {t.hero.greeting} <br className="hidden sm:block" />
              <span className="sm:inline">{t.hero.name} </span>
              <span className="text-orange-500">{t.hero.title}</span>.
            </h1>
            <div className="border-b-4 border-orange-500 w-20 sm:w-24 mb-4 sm:mb-6 mx-auto md:mx-0"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed px-2 sm:px-0">
              {t.hero.description}
              <span className="block mt-2 sm:mt-3">
                {t.hero.description2}
              </span>
            </p>
          </div>
        </div>
        <div className="flex-1 h-full flex justify-center items-center mt-6 sm:mt-8 md:mt-0 w-full md:w-auto">
          {/* <img src="*" alt="Martin Gadea" className="w-full h-full object-cover" /> */}
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
