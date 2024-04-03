import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./styles/index.css";
import "./styles/fonts.css";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
