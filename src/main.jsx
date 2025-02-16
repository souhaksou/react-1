import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import CSSRuntimeProvider from "@master/css.react";
import config from "../master.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CSSRuntimeProvider config={config}>
      <App />
    </CSSRuntimeProvider>
  </StrictMode>
);
