import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio showcasing my design projects and skills. Built using React, Remix, and Tailwind for a clean and responsive design. Additionally, I used Aceterrnity for more professional background components.',
    technologies: 'TYPESCRIPT, REACT, REMIX, TAILWIND',
    images: ["/assets/images/portfolio.png", "/assets/images/portfolio2.png", "/assets/images/portfolio3.png", "/assets/images/portfolio4.png",  ], 
    deploy: 'https://portfolio-nine-gules-88.vercel.app/',
    code: 'https://github.com/MartinGadea12/personal-portfolio',
  },
  {
    title: 'E-Commerce "Sneakers"',
    description: 'A modern and minimalist application, for an imported sneaker store, with payment for the application with Paypal or Stripe, notifications via email with Nodemailer.',
    technologies: 'TYPESCRIPT, REACT, REDUX, BOOTSTRAP',
    images: ["/assets/images/sneakers.png"], 
    deploy: 'https://snykers.vercel.app/',
    code: 'https://github.com/snYKersCompany/shoes-eComerce',
  },
  {
    title: 'App movil "Packar"',
    description: 'I worked at Packar, a company in Spain where I was developing a mobile application, which was going to be for sending packages.',
    technologies: 'TYPESCRIPT, REACT NATIVE, EXPO GO',
    images: ["/assets/images/packar.png"], 
    deploy: '',
    code: '',
  },
  {
    title: 'Crypto Bubbles',
    description: 'Currently working on an application for cryptocurrencies, this was one of the first implementations I did completely from scratch. The bubbles are made with D3.js, they can move, collide, and clicking on them takes them to detail.',
    technologies: 'TYPESCRIPT, REACT REMIX, D3JS',
    images: ['/assets/images/bubbles2.png'], 
    deploy: 'https://cryptoghost.fly.dev/dashboard/bubbles',
    code: '',
  },
  {
    title: 'Landing page',
    description: 'I designed and developed the landing page, an onchain data platform. The page features a sleek dark-themed design with teal accents, emphasizing the platforms reliability and expertise. Key elements include a clear navigation bar, a bold headline, and call-to-action buttons for user engagement.',
    technologies: 'TYPESCRIPT, REMIX, TAILWIND, ACETERNITY',
    images: ['/assets/images/landingPage.png', '/assets/images/langingPage2.png'],
    deploy: 'https://cryptoghost.fly.dev/',
    code: '',
  },
  {
    title: 'Cryptocurrency Dashboard',
    description: 'This section features three key tables: Top Cryptocurrencies by Volume, Trending Tokens, and Earlybird Coins. Each table provides essential data, including name, price, and recent performance metrics. Users can click on any token to view detailed information.',
    technologies: 'TYPESCRIPT, REMIX, TAILWIND',
    images: ['/assets/images/dashboard.jpg'],
    deploy: 'https://cryptoghost.fly.dev/dashboard/volume-coins',
    code: '',
  },
];

const ProjectPortfolio = () => {
  return (
    <div className="mx-auto mb-48 px-4 mt-32">
      <h1 className="text-4xl font-bold text-center text-white mb-7">
        <span className="text-orange-500">Pro</span>jects
      </h1>
      <div className="border-t-2 border-orange-500 max-w-6xl mx-auto mb-10"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 flex flex-col"
          >
            <ImageCarousel images={project.images || [project.image]} />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-orange-500 font-bold mb-2">{project.technologies}</p>
              <p className="text-gray-300 mb-4 flex-grow font-poppins font-semibold">{project.description}</p>
              <div className="mt-auto flex space-x-2">
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200 flex-grow text-center"
                  >
                    Deploy
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200 flex-grow text-center"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t-2 border-orange-500 max-w-6xl mx-auto mt-20"></div>
    </div>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div className="relative w-full h-40">
      <AnimatePresence initial={false} mode="wait">
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.img
              key={image}
              src={image}
              alt={`Project Image ${index}`}
              className="absolute w-full h-full object-cover top-0 left-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPortfolio;
