import { redirections } from "data";

const useRedirection = (currentPath: string) => {
  const redirection = redirections.find(({ path }) => path === currentPath);
  if (redirection) window.location.href = redirection.redirect;
};

export default useRedirection;
