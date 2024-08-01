import React, { useState } from "react";
import { AuroraBackground } from "./aurora-background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import emailjs from 'emailjs-com';

library.add(faGithub, faLinkedin);

const Contact = () => {
  const [formData, setFormData] = useState({
    companyOrRecruiter: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        alert('Message sent successfully!');
        setFormData({ companyOrRecruiter: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert(`Failed to send the message. Error: ${err.text || err}`);
      });
  };

  return (
    <AuroraBackground>
      <div className="contact-container text-white py-10 px-5 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center md:space-x-10">
          <div className="contact-info w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 pb-2"><span className=" text-orange-500">Con</span>tact</h2>
            <p className="mb-6 font-semibold">
              I am open to new job opportunities. If you are interested in my profile or think I could be a good fit for your company, please feel free to leave me a message using the form below. Thank you!
            </p>
          </div>
          <div className="contact-form w-full md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg border border-black relative z-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="companyOrRecruiter">
                  Company or Recruiter
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-black"
                  type="text"
                  id="companyOrRecruiter"
                  name="companyOrRecruiter"
                  placeholder="Enter your company or name"
                  value={formData.companyOrRecruiter}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-black"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-black"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:border-black"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer mt-10 flex justify-between items-center border-t-2 border-orange-500 pt-4">
          <div className="text-sm font-bold">©2024 Martin Gadea</div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/MartinGadea12"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 text-orange-500"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/martingadea12/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 text-orange-500"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Contact;
