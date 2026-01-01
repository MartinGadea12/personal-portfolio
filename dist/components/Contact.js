import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
    return (_jsx(AuroraBackground, { children: _jsxs("div", { className: "contact-container text-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-12 lg:px-20", children: [_jsxs("div", { className: "container mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:space-x-10 xl:space-x-12", children: [_jsxs("div", { className: "contact-info w-full lg:w-1/2 mb-8 lg:mb-0", children: [_jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 pb-2", children: [_jsx("span", { className: "text-orange-500", children: "Con" }), "tact"] }), _jsx("p", { className: "text-sm sm:text-base md:text-lg font-semibold leading-relaxed", children: "I'm open to new opportunities and collaborations. Whether you're looking for a developer with AI expertise, need help building scalable applications, or want to discuss a project, feel free to reach out. I'd love to hear from you!" })] }), _jsx("div", { className: "contact-form w-full lg:w-1/2 bg-gray-900 p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-lg border border-gray-800 relative z-10", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4 sm:mb-5", children: [_jsx("label", { className: "block text-sm sm:text-base font-bold mb-2", htmlFor: "companyOrRecruiter", children: "Company or Recruiter" }), _jsx("input", { className: "w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition", type: "text", id: "companyOrRecruiter", name: "companyOrRecruiter", placeholder: "Enter your company or name", value: formData.companyOrRecruiter, onChange: handleChange, required: true })] }), _jsxs("div", { className: "mb-4 sm:mb-5", children: [_jsx("label", { className: "block text-sm sm:text-base font-bold mb-2", htmlFor: "email", children: "Email Address" }), _jsx("input", { className: "w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition", type: "email", id: "email", name: "email", placeholder: "Enter your email address", value: formData.email, onChange: handleChange, required: true })] }), _jsxs("div", { className: "mb-4 sm:mb-5", children: [_jsx("label", { className: "block text-sm sm:text-base font-bold mb-2", htmlFor: "message", children: "Message" }), _jsx("textarea", { className: "w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base leading-tight border border-gray-500 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none", id: "message", name: "message", rows: 4, placeholder: "Write your message here", value: formData.message, onChange: handleChange, required: true })] }), _jsx("div", { className: "flex justify-end", children: _jsx("button", { className: "bg-orange-500 text-white text-sm sm:text-base font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition w-full sm:w-auto", type: "submit", children: "Send Message" }) })] }) })] }), _jsxs("div", { className: "footer mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-between items-center border-t-2 border-orange-500 pt-4 sm:pt-6 gap-4 sm:gap-0", children: [_jsx("div", { className: "text-xs sm:text-sm md:text-base font-bold", children: "\u00A92024 Martin Gadea" }), _jsxs("div", { className: "flex space-x-4 sm:space-x-5 md:space-x-6", children: [_jsx("a", { href: "https://github.com/MartinGadea12", target: "_blank", rel: "noopener noreferrer", className: "transition-transform transform hover:scale-110 active:scale-95 text-orange-500", "aria-label": "GitHub Profile", children: _jsx(FontAwesomeIcon, { icon: faGithub, className: "w-5 h-5 sm:w-6 sm:h-6" }) }), _jsx("a", { href: "https://www.linkedin.com/in/martingadea12/", target: "_blank", rel: "noopener noreferrer", className: "transition-transform transform hover:scale-110 active:scale-95 text-orange-500", "aria-label": "LinkedIn Profile", children: _jsx(FontAwesomeIcon, { icon: faLinkedin, className: "w-5 h-5 sm:w-6 sm:h-6" }) })] })] })] }) }));
};
export default Contact;
//# sourceMappingURL=Contact.js.map