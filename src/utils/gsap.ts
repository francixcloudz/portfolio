// Dependencies
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

// Assets
import type { AllRefsGsap } from "assets/types";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.defaults({ ease: "none", duration: 0 });

export * from "gsap";

export { ScrollTrigger, ScrollToPlugin };

export const clear = (elements) => elements.getAll().forEach((element) => element.kill(true));
