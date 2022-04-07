// Assets
import { redirections } from "assets/constants";

export const handleRedirections = (currentPath: string) => {
  const redirection = redirections.find(({ path }) => path === currentPath);
  if (redirection) window.location.href = redirection.redirect;
};

export const handleComponentDidMount = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  window.addEventListener("load", () => {
    handleRedirections(
      window.location.pathname.toLowerCase().replaceAll("/", "")
    );
    setTimeout(() => setLoading(false), 6000);
  });
};
