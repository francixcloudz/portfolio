// Assets
import useCurrentPath from "assets/hooks/useCurrentPath";
import useRedirection from "assets/hooks/useRedirection";

export const handleLoader = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  window.addEventListener("load", () => {
    useRedirection(useCurrentPath());
    setTimeout(() => setLoading(false), 6000);
  });
};
