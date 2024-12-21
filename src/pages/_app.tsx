import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import theme from "@theme/index";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { CookiesProvider } from "react-cookie";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CookiesProvider>
    </AppCacheProvider>
  );
}
