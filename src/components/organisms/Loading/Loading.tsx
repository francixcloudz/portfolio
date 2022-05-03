import { useState, useRef, createContext } from "react";
import { Container, AppWrapper } from "./Loading.styled";
import { handleLoader } from "./Loading.utils";
import LoadingItem from "components/molecules/LoadingItem";
import useSmoothScroll from "hooks/useSmoothScroll";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import { isProduction } from "data";
import { loadingContextInitialValues, LoadingContextValues, LoadingType } from "./Loading.types";

export const LoadingContext = createContext<LoadingContextValues>(loadingContextInitialValues);

export const Loading: LoadingType = ({ children }) => {
  const [isLoading, setIsLoading] = useState(isProduction);
  const portraitRef = useRef<HTMLDivElement>(null);

  useSmoothScroll();
  useIsoLayoutEffect(() => {
    handleLoader(setIsLoading);
  }, []);

  return (
    <Container isLoading={isLoading}>
      <AppWrapper isLoading={isLoading}>
        <LoadingContext.Provider
          value={{
            isVisible: !isLoading,
            portraitRef,
          }}
        >
          {children}
        </LoadingContext.Provider>
      </AppWrapper>
      <LoadingItem isLoading={isLoading} landingPortraitRef={portraitRef} />
    </Container>
  );
};
