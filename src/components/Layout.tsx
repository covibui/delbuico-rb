import {Container, Stack} from "@mui/material";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Header> {
	children: React.ReactNode;
};

export default function Layout({children, ...headerProps}: Props) {
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
				sx={{display: "flex", minHeight: 1}}
			>
				<Stack justifyContent="space-between" flex={1}>
					<div>
						<Header {...headerProps} />
						{children}
					</div>
					<Footer />
				</Stack>
			</Container>
		</>
	);
}
