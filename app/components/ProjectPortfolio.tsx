import { motion } from 'framer-motion';

const projects  = [
  {
    title: 'DESIGN PERSONAL PORTFOLIO',
    description: 'A personal portfolio showcasing my design projects and skills. Built using React, Remix, and Tailwind for a clean and responsive design. Additionally, I used Aceterrnity for more professional background components.',
    technologies: 'TYPESCRIPT, REACT, REMIX, TAILWIND',
    image: '../../public/portfolioDesing.png',
    link: '/projects/design-portfolio',
    deploy: 'https://deploy-link.com/design-portfolio',
    code: 'https://github.com/username/design-portfolio',
  },
  {
    title: 'E-COMMERCE "SNEAKERS"',
    description: 'A modern and minimalist application, for an imported sneaker store, with payment for the application with Paypal or Stripe, notifications via email with Nodemailer.',
    technologies: 'TYPESCRIPT, REACT, REDUX, BOOTSTRAP',
    image: '../../public/sneakersDesing.png',
    link: '/projects/e-learning-landing-page',
    deploy: 'https://deploy-link.com/sneakers',
    code: 'https://github.com/username/sneakers',
  },
  {
    title: 'IN PROGRESS',
    description: 'Currently working to fill this place with a good project, sorry for the delay..',
    technologies: 'WORKING HARD',
    image: '../../public/inProgress.png',
    link: '/projects/e-learning-landing-page',
    deploy: '#',
    code: '#',
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-orange-500 font-bold mb-2">{project.technologies}</p>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <div className="mt-auto flex space-x-2">
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200 flex-grow text-center"
                >
                  Deploy
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200 flex-grow text-center"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t-2 border-orange-500 max-w-6xl mx-auto mt-20"></div>
    </div>
  );
};

export default ProjectPortfolio;
