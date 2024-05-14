import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.ts";
import { CacheProvider } from "@emotion/react";
import cacheRtl from "./cache/cache.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<CacheProvider value={cacheRtl}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</CacheProvider>
);
