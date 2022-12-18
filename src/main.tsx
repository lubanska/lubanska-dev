import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppStyles } from "./AppStyles";
import { ThemeProvider } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <AppStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
