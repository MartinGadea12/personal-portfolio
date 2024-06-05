// app/components/Navbar.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar =() => {
  return (
    <nav className="bg-black text-white p-4 flex justify-end space-x-4">
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
    </nav>
  );
}

export default Navbar;
