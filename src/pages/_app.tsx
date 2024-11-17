import {AppProps} from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Decap CMS preview feature.
import "@public/styles/global.css";
import {CssBaseline, ThemeProvider} from "@mui/material";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import theme from "@theme/index";

export default function App({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
