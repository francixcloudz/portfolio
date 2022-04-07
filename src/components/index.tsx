// Dependencies
import { useState, useRef } from "react";

// Styled
import { Container, AppWrapper } from "./styled";

// Inner
import { handleComponentDidMount } from "./utils";

// Components
import LoadingScreen from "components/organisms/LoadingScreen";
import Home from "components/pages/Home";

// Assets
import useLayoutEffect from "assets/hooks/useLayoutEffect";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const portraitRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => handleComponentDidMount(setLoading), []);

  return (
    <Container loading={loading ? 1 : 0}>
      <AppWrapper loading={loading ? 1 : 0}>
        <Home loading={loading} portraitRef={portraitRef} />
      </AppWrapper>
      <LoadingScreen loading={loading} landingPortraitRef={portraitRef} />
    </Container>
  );
};

export default App;
