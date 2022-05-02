import { useLayoutEffect, useEffect } from "react";

const usableDom =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined";

const useIsoLayoutEffect = usableDom ? useLayoutEffect : useEffect;

export default useIsoLayoutEffect;
