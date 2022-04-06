// Dependencies
import { useState, useEffect, useRef } from "react";

// Children
import LoadingScreen from "components/pages/LoadingScreen";
import Home from "components/pages/Home";

// Assets
import "assets/scripts/smooth-scrolling";
import "assets/styles/reset.css";
import "assets/styles/general.css";

const redirections = [
  {
    path: "resume",
    redirect:
      "https://arrigoni.s3.sa-east-1.amazonaws.com/Francisco+Arrigoni+-+Resume.pdf",
  },
  { path: "whatsapp", redirect: "https://wa.me/5492995769384/" },
  { path: "portfolio", redirect: "https://arrigoni.in/" },
  { path: "linkedin", redirect: "https://linkedin.com/in/francixclouds/" },
  { path: "github", redirect: "https://github.com/francixclouds/" },
  { path: "instagram", redirect: "https://instagram.com/francixclouds/" },
  { path: "twitter", redirect: "https://twitter.com/francixclouds/" },
  { path: "facebook", redirect: "https://facebook.com/francixclouds/" },
];

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean | null>(null);

  const portraitRef = useRef<HTMLImageElement>(null);

  const handleRedirections = (currentPath: string) => {
    const redirection = redirections.find(({ path }) => path === currentPath);
    if (redirection) window.location.href = redirection.redirect;
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(true);
      handleRedirections(
        window.location.pathname.toLowerCase().replaceAll("/", "")
      );
      setTimeout(() => setLoading(false), 6000);
    });
  }, []);

  return (
    <div
      style={
        loading
          ? { overflow: "hidden", height: "100vh" }
          : { overflow: "auto", height: "auto" }
      }
    >
      <Home portraitRef={portraitRef} />
      <LoadingScreen loading={loading} landingPortraitRef={portraitRef} />
    </div>
  );
};

export default App;
