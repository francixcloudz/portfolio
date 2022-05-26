import { useState, createContext, ReactNode } from "react";
import useCurrentPath from "hooks/useCurrentPath";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRedirection from "hooks/useRedirection";

interface LoadingContextValues {
  isLoaded: boolean;
}

export const LoadingContext = createContext<LoadingContextValues>({
  isLoaded: false,
});

interface LoadingProps {
  children: ReactNode;
  time?: number;
}

const Loading = ({ children, time = 6000 }: LoadingProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useIsoLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      useRedirection(useCurrentPath());
      setTimeout(() => setIsLoaded(true), time);
    });
  }, []);

  return (
    <LoadingContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isLoaded,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default Loading;
