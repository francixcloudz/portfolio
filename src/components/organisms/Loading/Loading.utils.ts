import useCurrentPath from "hooks/useCurrentPath";
import useRedirection from "hooks/useRedirection";

export const handleLoader = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  window.scrollTo(0, 0);
  window.addEventListener("load", () => {
    useRedirection(useCurrentPath());
    setTimeout(() => setLoading(false), 6000);
  });
};
