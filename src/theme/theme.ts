import { createTheme } from "@mui/material";

const theme = createTheme({
	direction: "rtl",
	palette: {
		primary: {
			main: "#C42127",
		},
		secondary: {
			main: "#595A5C",
		},
		background: {
			default: "#ffffff",
			paper: "#f1f1f1",
		},
	},
	typography: {},
});

export default theme;
