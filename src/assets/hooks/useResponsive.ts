// Dependencies
import { useState } from "react";

// Assets
import useLayoutEffect from "assets/hooks/useLayoutEffect";

const useResponsive: (breakpoint: number, type?: "min" | "max") => boolean = (
  breakpoint,
  type = "max"
) => {
  const [isDevice, setIsDevice] = useState(false);

  // resize
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsDevice(
        window.matchMedia(`screen and (max-width: ${breakpoint - 1}px)`).matches
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDevice, breakpoint]);

  useLayoutEffect(() => {
    setIsDevice(
      () =>
        window &&
        window.matchMedia &&
        window.matchMedia(`screen and (max-width: ${breakpoint - 1}px)`).matches
    );
  }, [breakpoint]);

  return type === "min" ? !isDevice : isDevice;
};

export default useResponsive;
