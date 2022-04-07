import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export * from "gsap";

export { ScrollTrigger, ScrollToPlugin };

export const clear = (elements) =>
  elements.getAll().forEach((element) => element.kill(true));
