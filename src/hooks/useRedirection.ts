// Assets
import { redirections } from "constants";

const useRedirection = (currentPath: string) => {
  const redirection = redirections.find(({ path }) => path === currentPath);
  if (redirection) 
  .location.href = redirection.redirect;
};

export default useRedirection;
