export interface User {
  id: number;
}

export interface DomRect {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export type AllRefsGsap = { [element: string]: gsap.TweenTarget };
