import { AuroraBackground } from "./aurora-background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub, faLinkedin, faTwitter);

const Contact = () => {
  return (
    <AuroraBackground>
      <div className="contact-container text-white py-10 px-5 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center md:space-x-10">
          <div className="contact-info w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 pb-2"><span className=" text-orange-500">Con</span>tact</h2>
            <p className="mb-6 font-semibold">
            I am open to new job positions, if you are attracted to my profile or think that I could be a possible candidate for your company, do not hesitate to leave me an email in the following form. Thank you so much!
            </p>
          </div>
          <div className="contact-form w-full md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg border border-black relative z-10">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-black"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-black"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
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
                  placeholder="Enter your message"
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
          <div className="text-sm font-bold"> @2024 Martin Gadea</div>
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
            <a
              href="https://twitter.com/MartinGadea12"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 text-orange-500"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Contact;
