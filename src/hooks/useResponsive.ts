import { useState } from "react";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";

const useResponsive: (breakpoint: number, type?: "min" | "max") => boolean = (
  breakpoint,
  type = "max",
) => {
  const [isDevice, setIsDevice] = useState(false);

  // resize
  useIsoLayoutEffect(() => {
    const handleResize = () => {
      setIsDevice(window.matchMedia(`screen and (max-width: ${breakpoint - 1}px)`).matches);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isDevice, breakpoint]);

  useIsoLayoutEffect(() => {
    setIsDevice(
      () =>
        window &&
        window.matchMedia &&
        window.matchMedia(`screen and (max-width: ${breakpoint - 1}px)`).matches,
    );
  }, [breakpoint]);

  return type === "min" ? !isDevice : isDevice;
};

export default useResponsive;
