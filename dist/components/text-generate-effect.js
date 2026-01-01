"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "~/utils/cn";
export const TextGenerateEffect = ({ words, className, }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate("span", {
            opacity: 1,
        }, {
            duration: 2,
            delay: stagger(0.2),
        });
    }, [scope.current]);
    const renderWords = () => {
        return (_jsx(motion.div, { ref: scope, children: wordsArray.map((word, idx) => {
                return (_jsxs(motion.span, { className: "dark:text-white text-black opacity-0", children: [word, " "] }, word + idx));
            }) }));
    };
    return (_jsx("div", { className: cn("font-bold", className), children: _jsx("div", { className: "mt-4", children: _jsx("div", { className: " dark:text-white text-black text-2xl leading-snug tracking-wide", children: renderWords() }) }) }));
};
//# sourceMappingURL=text-generate-effect.js.map