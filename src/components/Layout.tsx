import { Box, Container, Stack } from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ComponentProps, useEffect, useState } from "react";
import LogIn from "./LogIn";
import { useCookies } from "react-cookie";
import moment from "moment";

interface Props extends ComponentProps<typeof Header> {
  children: React.ReactNode;
}

export default function Layout({ children, ...headerProps }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [cookies, setCookie] = useCookies(["logged-in"]);

  useEffect(() => {
    const loggedInCookie = cookies["logged-in"];
    if (loggedInCookie) {
      setIsLoggedIn(true);
      setCookie("logged-in", true, {
        expires: moment().add(14, "days").toDate(),
      });
    } else {
      setIsLoggedIn(false);
    }
  }, [cookies]);

  const onLogin = () => {
    setIsLoggedIn(true);
    setCookie("logged-in", true, {
      expires: moment().add(14, "days").toDate(),
    });
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Container
        component="main"
        maxWidth="lg"
        sx={{ display: "flex", minHeight: 1 }}
      >
        <Stack justifyContent="space-between" flex={1}>
          <Box sx={{ flexGrow: 1 }}>
            {isLoggedIn ? (
              <>
                <Header {...headerProps} />

                {children}
              </>
            ) : (
              <LogIn onLogin={onLogin} />
            )}
          </Box>
          <Footer />
        </Stack>
      </Container>
    </>
  );
}
