import {AppProps} from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Decap CMS preview feature.
import "@public/styles/global.css";
import {CssBaseline, ThemeProvider} from "@mui/material";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import theme from "@theme/index";
import {AppCacheProvider} from "@mui/material-nextjs/v13-pagesRouter";

export default function App(props: AppProps) {
	const {Component, pageProps} = props;
	return (
		<AppCacheProvider {...props}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</AppCacheProvider>
	);
}
