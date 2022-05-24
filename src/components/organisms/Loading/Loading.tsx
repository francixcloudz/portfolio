import { useState, useRef, createContext, useMemo } from "react";
import LoadingItem from "components/molecules/LoadingItem/LoadingItem";
import { isProduction } from "data";
import useCurrentPath from "hooks/useCurrentPath";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRedirection from "hooks/useRedirection";
import useSmoothScroll from "hooks/useSmoothScroll";
import { Container, AppWrapper } from "./Loading.styled";
import { loadingContextInitialValues, LoadingContextValues, LoadingProps } from "./utils/types";

export const LoadingContext = createContext<LoadingContextValues>(loadingContextInitialValues);

const Loading = ({ children }: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(isProduction);
  const portraitRef = useRef<HTMLDivElement>(null);

  useSmoothScroll();
  useIsoLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      useRedirection(useCurrentPath());
      setTimeout(() => setIsLoading(false), 6000);
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      isVisible: !isLoading,
      portraitRef,
    }),
    [],
  );

  return (
    <Container isLoading={isLoading}>
      <AppWrapper isLoading={isLoading}>
        <LoadingContext.Provider value={contextValue}>{children}</LoadingContext.Provider>
      </AppWrapper>
      <LoadingItem isLoading={isLoading} landingPortraitRef={portraitRef} />
    </Container>
  );
};

export default Loading;
