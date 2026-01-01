import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Navbar = () => {
    return (_jsx("nav", { className: "bg-black text-white p-3 sm:p-4 flex justify-end items-center w-full", children: _jsxs("div", { className: "flex space-x-3 sm:space-x-4 md:space-x-5", children: [_jsx("a", { href: "https://github.com/MartinGadea12", target: "_blank", rel: "noopener noreferrer", className: "transition-transform transform hover:scale-110 active:scale-95 text-orange-500", "aria-label": "GitHub Profile", children: _jsx(FontAwesomeIcon, { icon: faGithub, className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" }) }), _jsx("a", { href: "https://www.linkedin.com/in/martingadea12/", target: "_blank", rel: "noopener noreferrer", className: "transition-transform transform hover:scale-110 active:scale-95 text-orange-500", "aria-label": "LinkedIn Profile", children: _jsx(FontAwesomeIcon, { icon: faLinkedin, className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" }) })] }) }));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map