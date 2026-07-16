import { useState, useEffect } from "react";
import HomePage from "./pages/Home";
import GalleryPage from "./pages/Gallery";

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.slice(1) || "home";
    return hash;
  });

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash.slice(1) || "home");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  switch (page) {
    case "gallery":
      return <GalleryPage />;
    default:
      return <HomePage />;
  }
}

export default App;
