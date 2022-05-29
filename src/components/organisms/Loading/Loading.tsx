import { useState, createContext, ReactNode } from "react";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";

interface LoadingContextValues {
  isLoaded: boolean;
}

const loadingContextValues: LoadingContextValues = {
  isLoaded: false,
};

export const LoadingContext = createContext<LoadingContextValues>(loadingContextValues);

interface LoadingProps {
  children: ReactNode;
  delay: number;
  onLoadCallback?: () => void | undefined;
}

const Loading = ({ children, onLoadCallback, delay }: LoadingProps) => {
  const [isLoaded, setIsLoaded] = useState(loadingContextValues.isLoaded);

  useIsoLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      if (onLoadCallback) onLoadCallback();
      setTimeout(() => setIsLoaded(true), delay);
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
