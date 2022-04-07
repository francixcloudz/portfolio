import { useLayoutEffect as useLayoutEffectReact, useEffect } from "react";

const usableDom =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined";

const useLayoutEffect = usableDom ? useLayoutEffectReact : useEffect;

export default useLayoutEffect;
