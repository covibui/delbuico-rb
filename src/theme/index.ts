import {createTheme, ThemeOptions} from "@mui/material";
import palette from "./palette";

let theme = createTheme({
	typography: {
		fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
	},
	palette: {
		mode: "light",
		background: {
			default: palette.beige.BG,
			paper: palette.beige.B1,
		},
		text: {
			primary: "#000",
			secondary: "rgba(0,0,0,0.4)",
		},
		primary: {
			main: palette.beige.B4,
		},
	},
});

theme = createTheme(theme, {
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiButton: {
			defaultProps: {
				variant: "contained",
			},
			styleOverrides: {
				root: theme.unstable_sx({
					boxShadow: "none",
					"&:hover, &:focus, &:active": {
						boxShadow: "none",
					},
				}),
				containedPrimary: {
					color: theme.palette.common.white,
				},
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: theme.unstable_sx({
					px: 1.25,
					[theme.breakpoints.up("sm")]: {
						px: 2,
					},
				}),
			},
		},
	},
} as ThemeOptions);

export default theme;
