// Dependencies
import { useState, useEffect } from "react";

// Children
import LoadingScreen from "components/layouts/LoadingScreen";
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
  { path: "linkedin", redirect: "https://linkedin.com/in/franciscloudss/" },
  { path: "github", redirect: "https://github.com/franciscloudss/" },
  { path: "instagram", redirect: "https://twitter.com/franciscloudss/" },
  { path: "twitter", redirect: "https://twitter.com/franciscloudss/" },
  { path: "facebook", redirect: "https://facebook.com/franciscloudss/" },
];

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleRedirections = (currentPath: string) => {
    const redirection = redirections.find(({ path }) => path === currentPath);
    if (redirection) window.location.href = redirection.redirect;
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      handleRedirections(
        window.location.pathname.toLowerCase().replaceAll("/", "")
      );
      setTimeout(() => setLoading(false), 3000);
    });
  }, []);

  return (
    <div id="App">
      <Home />
      {process.env.NODE_ENV === "production" && (
        <LoadingScreen loading={loading} />
      )}
    </div>
  );
};

export default App;
