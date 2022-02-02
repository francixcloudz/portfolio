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
  { path: "linkedin", redirect: "https://linkedin.com/in/franciscoarrigoni/" },
  { path: "github", redirect: "https://github.com/franarrigoni/" },
  { path: "twitter", redirect: "https://twitter.com/franciscloudss/" },
  { path: "instagram", redirect: "https://twitter.com/franciscoarrigonni/" },
  { path: "facebook", redirect: "https://facebook.com/franarrigonii/" },
  { path: "whatsapp", redirect: "https://wa.me/5492995769384/" },
  { path: "portfolio", redirect: "https://arrigoni.in/" },
];

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const loadingTime = 3500;

  const handleRedirections = (currentPath: string) => {
    const redirection = redirections.find(({ path }) => path === currentPath);
    if (redirection) window.open(redirection.redirect, "_blank");
  };

  useEffect(() => {
    setTimeout(() => {
      handleRedirections(window.location.pathname.toLowerCase().slice(1));
      setLoading(false);
    }, loadingTime);
  }, []);

  return (
    <div id="App">
      <Home />
      {loading && <LoadingScreen time={loadingTime} />}
    </div>
  );
};

export default App;
