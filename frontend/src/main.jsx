import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext";
import logoIcon from "./assets/Images/logo.jpg";

const faviconLink = document.querySelector('link[rel="icon"]');
if (faviconLink) {
  faviconLink.href = logoIcon;
  faviconLink.type = "image/png";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);
