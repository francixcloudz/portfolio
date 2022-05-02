import { useState, useRef } from "react";
import { Container, AppWrapper } from "./styled";
import { handleLoader } from "./utils";
import Loading from "components/templates/Loading";
import Home from "components/pages/Home";
import useSmoothScroll from "hooks/useSmoothScroll";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import { isProduction } from "data";

export const LoadingContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(isProduction);
  const portraitRef = useRef<HTMLDivElement>(null);

  useSmoothScroll();
  useIsoLayoutEffect(() => {
    handleLoader(setIsLoading);
  }, []);

  return (
    <Container isLoading={isLoading}>
      <AppWrapper isLoading={isLoading}>
        <Home isVisible={!isLoading} portraitRef={portraitRef} />
      </AppWrapper>
      <Loading isLoading={isLoading} landingPortraitRef={portraitRef} />
    </Container>
  );
};
