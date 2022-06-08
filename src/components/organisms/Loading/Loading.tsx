import { useState, createContext, ReactNode } from "react";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";

interface LoadingContextValues {
  isLoaded: boolean;
  isDelayLoaded: boolean;
}

const loadingContextValues: LoadingContextValues = {
  isLoaded: false,
  isDelayLoaded: false,
};

export const LoadingContext = createContext<LoadingContextValues>(loadingContextValues);

interface LoadingProps {
  children: ReactNode;
  delay: number;
  onLoadCallback?: () => void;
  onCompleteCallback?: () => void;
}

const Loading = ({ children, delay, onLoadCallback, onCompleteCallback }: LoadingProps) => {
  const [isLoaded, setIsLoaded] = useState(loadingContextValues.isLoaded);
  const [isDelayLoaded, setIsDelayLoaded] = useState(loadingContextValues.isLoaded);

  useIsoLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      setIsLoaded(true);
      if (onLoadCallback) onLoadCallback();
      setTimeout(() => {
        setIsDelayLoaded(true);
        if (onCompleteCallback) onCompleteCallback();
      }, delay);
    });
  }, []);

  return (
    <LoadingContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isLoaded,
        isDelayLoaded,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default Loading;
