// Dependencies
import { useState, useEffect, useRef } from "react";

// Styled
import { Container, AppWrapper } from "./styled";

// Components
import LoadingScreen from "components/organisms/LoadingScreen";
import Home from "components/pages/Home";

const redirections = [
  {
    path: "resume",
    redirect:
      "https://arrigoni.s3.sa-east-1.amazonaws.com/Francisco+Arrigoni+-+Resume.pdf",
  },
  { path: "whatsapp", redirect: "https://wa.me/5492995769384/" },
  { path: "portfolio", redirect: "https://arrigoni.in/" },
  { path: "linkedin", redirect: "https://linkedin.com/in/franciscloudz/" },
  { path: "github", redirect: "https://github.com/franciscloudz/" },
  { path: "instagram", redirect: "https://instagram.com/franciscloudz/" },
  { path: "twitter", redirect: "https://twitter.com/franciscloudz/" },
  { path: "facebook", redirect: "https://facebook.com/franciscloudz/" },
];

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const portraitRef = useRef<HTMLImageElement>(null);

  const handleRedirections = (currentPath: string) => {
    const redirection = redirections.find(({ path }) => path === currentPath);
    if (redirection) window.location.href = redirection.redirect;
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      handleRedirections(
        window.location.pathname.toLowerCase().replaceAll("/", "")
      );
      setTimeout(() => setLoading(false), 6000);
    });
  }, []);

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
