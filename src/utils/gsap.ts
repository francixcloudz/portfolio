import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.defaults({ ease: "none", duration: 0 });

export * from "gsap";

export { ScrollTrigger, ScrollToPlugin };

export const clear = (elements) => elements.getAll().forEach((element) => element.kill(true));
