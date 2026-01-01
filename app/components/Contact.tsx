import React, { useState } from "react";
import { AuroraBackground } from "./aurora-background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import emailjs from 'emailjs-com';
import { useLanguage } from '~/contexts/LanguageContext';

library.add(faGithub, faLinkedin);

const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    companyOrRecruiter: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = "service_oopwj2c"; 
    const templateID = 'template_g17jead';
    const userID = 'NzvmJs6WKa23_VH_m';

    emailjs.send(serviceID, templateID, {
      from_name: formData.companyOrRecruiter,
      message: formData.message,
      reply_to: formData.email
    }, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(t.contact.success);
        setFormData({ companyOrRecruiter: '', email: '', message: '' });
        setIsSending(false);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert(t.contact.error);
        setIsSending(false);
      });
  };

  return (
    <AuroraBackground>
      <div className="contact-container text-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[95rem] mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-10 xl:space-x-12">
          <div className="contact-info w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 pb-2">
              <span className="text-orange-500">{t.contact.title.substring(0, 3)}</span>{t.contact.title.substring(3)}
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>
          <div className="contact-form w-full lg:w-1/2 bg-gray-900 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-lg border border-gray-800 relative z-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm sm:text-base font-bold mb-2" htmlFor="companyOrRecruiter">
                  {t.contact.name}
                </label>
                <input
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                  type="text"
                  id="companyOrRecruiter"
                  name="companyOrRecruiter"
                  placeholder={language === 'en' ? "Enter your company or name" : "Ingresa tu empresa o nombre"}
                  value={formData.companyOrRecruiter}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm sm:text-base font-bold mb-2" htmlFor="email">
                  {t.contact.email}
                </label>
                <input
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                  type="email"
                  id="email"
                  name="email"
                  placeholder={language === 'en' ? "Enter your email address" : "Ingresa tu correo electrónico"}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 sm:mb-5">
                <label className="block text-sm sm:text-base font-bold mb-2" htmlFor="message">
                  {t.contact.message}
                </label>
                <textarea
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={language === 'en' ? "Write your message here" : "Escribe tu mensaje aquí"}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-orange-500 text-white text-sm sm:text-base font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? t.contact.sending : t.contact.send}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-between items-center border-t-2 border-orange-500 pt-4 sm:pt-6 gap-4 sm:gap-0">
          <div className="text-xs sm:text-sm md:text-base font-bold">©2024 Martin Gadea</div>
          <div className="flex space-x-4 sm:space-x-5 md:space-x-6">
            <a
              href="https://github.com/MartinGadea12"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 active:scale-95 text-orange-500"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/martingadea12/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 active:scale-95 text-orange-500"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Contact;
