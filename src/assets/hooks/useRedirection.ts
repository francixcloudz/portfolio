// Assets
import { redirections } from "assets/constants";

const useRedirection = (currentPath: string) => {
  const redirection = redirections.find(({ path }) => path === currentPath);
  if (redirection) window.location.href = redirection.redirect;
};

export default useRedirection;
