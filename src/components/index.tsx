// Dependencies
import { useState, useRef } from "react";

// Files
import { Container, AppWrapper } from "./styled";
import { handleLoader } from "./utils";

// Components
import LoadingScreen from "components/organisms/LoadingScreen";
import Home from "components/pages/Home";

// Assets
import useSmoothScroll from "assets/hooks/useSmoothScroll";
import useIsoLayoutEffect from "assets/hooks/useIsoLayoutEffect";
import { isProduction } from "assets/constants";

const App: React.FC = () => {
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
      <LoadingScreen isLoading={isLoading} landingPortraitRef={portraitRef} />
    </Container>
  );
};

export default App;
