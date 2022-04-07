import { useLayoutEffect as useLayoutEffectReact, useEffect } from "react";

const useLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffectReact : useEffect;

export default useLayoutEffect;
