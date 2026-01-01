// components/ui/aurora-background.tsx
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "~/utils/cn";
export const AuroraBackground = ({ className, children, showRadialGradient = true, ...props }) => {
    return (_jsx("main", { children: _jsxs("div", { className: cn("relative flex flex-col min-h-[100vh] sm:h-[100vh] items-center justify-center bg-black text-white transition-bg", // Fondo negro
            className), ...props, children: [_jsx("div", { className: "absolute inset-0 overflow-hidden", children: _jsx("div", { className: cn(`
            [--white-gradient:repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%)]
            [--aurora:repeating-linear-gradient(100deg,#003366_0%,#003366_25%,#336699_50%,#3399cc_75%,#003366_100%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-75 will-change-transform`, showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,#000000_10%,transparent_70%)]`) }) }), children] }) }));
};
//# sourceMappingURL=aurora-background.js.map