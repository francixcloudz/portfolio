import { useState, useRef, createContext, useMemo } from "react";
import LoadingItem from "components/pages/Home/Loading/LoadingItem/LoadingItem";
import useCurrentPath from "hooks/useCurrentPath";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRedirection from "hooks/useRedirection";
import { Container, AppWrapper } from "./Loading.styled";
import { loadingContextInitialValues, LoadingContextValues, LoadingProps } from "./utils/types";

export const LoadingContext = createContext<LoadingContextValues>(loadingContextInitialValues);

const Loading = ({ children }: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const portraitRef = useRef<HTMLDivElement>(null);

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
  console.log("loading");

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
