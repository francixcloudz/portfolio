const useCurrentPath = () => window.location.pathname.toLowerCase().replaceAll("/", "");

export default useCurrentPath;
